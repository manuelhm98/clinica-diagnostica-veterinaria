import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  addNewProduct,
  putProduct,
  showImage,
  uploadProductPhoto,
} from "../../services/product";
import { Success } from "../Global/Alerts/Success";
import { addProduct } from "../../redux/actions/product";
import { useDropzone } from "react-dropzone";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IMG from "../../assets/profile.png";
import { Error } from "../Global/Alerts/Error";

export default function Form({
  species,
  categories,
  vendors,
  brands,
  setShowModal,
  product,
}) {
  const [petImage, setPetimage] = useState(
    product
      ? product?.img !== "producto.png"
        ? showImage(product?.img)
        : IMG
      : IMG
  );
  const [productfile, setProductfile] = useState();
  const [spinner, setSpinner] = useState(false);
  const onDropImage = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setPetimage(URL.createObjectURL(file));
    setProductfile(file);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { getRootProps: getRootImgProps, getInputProps: getInputImgProps } =
    useDropzone({
      accept: "image/jpeg, image/png",
      noKeyboard: true,
      multiple: false,
      onDrop: onDropImage,
    });
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initial(product),
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre del producto es requerido"),
      price: Yup.number()
        .required("El precio es requerido")
        .typeError("Precio invalido"),
      description: Yup.string().required("La descripcion es requerida"),
      stock: Yup.number()
        .required("El stock es requerido")
        .typeError("Stock invalido"),
      categoryId: Yup.number().required("Debes seleccionar una categoria"),
      speciesId: Yup.number().required("Debes seleccionar la especie"),
      brandsId: Yup.number().required("Debes seleccionar la marca"),
    }),
    onSubmit: (values) => {
      if (product) {
        setSpinner(true)
        putProduct(values, product?.id).then((res) => {
          if (res.product) {
            if (productfile) {
              uploadProductPhoto(res.product?.id, productfile).then((res) => {
                console.log(res)
                if(!res.ok){
                  Error("Error al guardar la foto del producto")
                  setSpinner(false)
                  setShowModal(false);
                  return;
                }
                Success("Se actualizo el producto");
                setShowModal(false);
                setSpinner(false)
                dispatch(addProduct(values));
              });
              return;
            }
            Success("Se actualizo el producto");
            setShowModal(false);
            setSpinner(false)
            dispatch(addProduct(values));
            return;
          }
        });
        return;
      }
      setSpinner(true)
      addNewProduct(values).then((res) => {
        if (res.product) {
          if (productfile) {
            uploadProductPhoto(res.product?.id, productfile).then((res) => {
            if(!res.ok){
              Error("Error al guardar la foto del producto")
              setShowModal(false);
              setSpinner(false)
              return
            }
              Success("Se agrego el nuevo producto");
              setSpinner(false)
              setShowModal(false);
              dispatch(addProduct(values));

            });
            return;
          }
          Success("Se agrego el nuevo producto");
          setSpinner(false)
          setShowModal(false);
          dispatch(addProduct(values));
          return;
        }
      });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Nombre</label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                defaultValue={product && product?.name}
                placeholder="Ingresa el nombre de la categoria"
                className={
                  "w-full border p-1 text-sm rounded outline-none hover:border-green-400 " +
                  (formik.errors.name && formik.touched.name
                    ? "border-red-400"
                    : "border-gray-300")
                }
              />
              {formik.errors.name && formik.touched.name && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.name}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 p-1 mt-1">
              <div className="flex flex-col p-1 mt-1">
                <label className="text-sm text-gray-400">Precio</label>
                <input
                  type="text"
                  name="price"
                  onChange={formik.handleChange}
                  defaultValue={product && product?.price}
                  placeholder="Ingresa el precio del producto"
                  className={
                    "w-auto border p-1 text-sm rounded outline-none hover:border-green-400 " +
                    (formik.errors.price && formik.touched.price
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                />
                {formik.errors.price && formik.touched.price && (
                  <span className="text-sm font-normal text-red-400">
                    {formik.errors.price}
                  </span>
                )}
              </div>
              <div className="flex flex-col p-1 mt-1">
                <label className="text-sm text-gray-400">Stock</label>
                <input
                  type="text"
                  name="stock"
                  onChange={formik.handleChange}
                  defaultValue={product && product?.stock}
                  placeholder="Ingresa el stock del producto"
                  className={
                    "w-auto border p-1 text-sm rounded outline-none hover:border-green-400 " +
                    (formik.errors.stock && formik.touched.stock
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                />
                {formik.errors.stock && formik.touched.stock && (
                  <span className="text-sm font-normal text-red-400">
                    {formik.errors.stock}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Descripcion</label>
              <textarea
                type="text"
                cols={4}
                rows={4}
                name="description"
                onChange={formik.handleChange}
                defaultValue={product && product?.description}
                placeholder="Ingresa la descripcion del producto"
                className={
                  "w-full border p-1 text-sm rounded outline-none hover:border-green-400 " +
                  (formik.errors.description && formik.touched.description
                    ? "border-red-400"
                    : "border-gray-300")
                }
              />
              {formik.errors.description && formik.touched.description && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.description}
                </span>
              )}
            </div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Categoria</label>
              <select
                name="categoryId"
                onChange={formik.handleChange}
                defaultValue={product ? product?.categoryId : "DEFAULT"}
                className={
                  "w-full border p-1 text-sm rounded outline-none hover:border-green-400 " +
                  (formik.errors.categoryId && formik.touched.categoryId
                    ? "border-red-400"
                    : "border-gray-300")
                }
              >
                <option disabled selected value={"DEFAULT"}>
                  Selecciona la categoria
                </option>
                {categories?.map((c) => (
                  <option value={c.id} key={c.id}>
                    {c.type}
                  </option>
                ))}
              </select>
              {formik.errors.categoryId && formik.touched.categoryId && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.categoryId}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 mt-4 w-full text-white flex justify-center rounded px-12 py-1 text-xs"
            >
              {spinner ? (
                <div
                  style={{ borderTopColor: "transparent" }}
                  className="w-5 h-5 border-2 border-white border-solid  rounded-full animate-spin"
                />
              ) : product ? (
                "Actualizar"
              ) : (
                "Agregar"
              )}
            </button>
          </div>
          <div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Especie</label>
              <select
                name="speciesId"
                onChange={formik.handleChange}
                defaultValue={product ? product?.speciesId : "DEFAULT"}
                className={
                  "border p-1 text-sm rounded outline-none hover:border-green-400 " +
                  (formik.errors.speciesId && formik.touched.speciesId
                    ? "border-red-400"
                    : "border-gray-300")
                }
              >
                <option disabled selected value={"DEFAULT"}>
                  Selecciona la especie
                </option>
                {species?.map((sp) => (
                  <option key={sp.id} value={sp.id}>
                    {sp.type}
                  </option>
                ))}
              </select>
              {formik.errors.speciesId && formik.touched.speciesId && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.speciesId}
                </span>
              )}
            </div>

            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Marca</label>
              <select
                name="brandsId"
                onChange={formik.handleChange}
                defaultValue={product ? product?.brandsId : "DEFAULT"}
                className={
                  "border p-1 text-sm rounded outline-none hover:border-green-400 " +
                  (formik.errors.brandsId && formik.touched.brandsId
                    ? "border-red-400"
                    : "border-gray-300")
                }
              >
                <option disabled selected value={"DEFAULT"}>
                  Selecciona la marca
                </option>
                {brands?.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.brand}
                  </option>
                ))}
              </select>
              {formik.errors.brandsId && formik.touched.brandsId && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.brandsId}
                </span>
              )}
            </div>
            <div>
              <div
                {...getRootImgProps()}
                className="flex justify-center shadow rounded p-4 items-center mt-4"
              >
                <img
                  src={petImage}
                  className="rounded max-w-full max-h-56"
                  alt="null"
                />
              </div>
              <label className="w-full text-xs py-1 mt-3 p-1 flex items-center bg-white rounded-lg tracking-wide  border cursor-pointer">
                <FontAwesomeIcon
                  className="text-gray-600 ml-2"
                  icon={faFolder}
                />
                <span className="text-gray-500 leading-normal ml-4 ">
                  Seleccionar una imagen
                </span>
                <input {...getInputImgProps()} type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
function initial(product) {
  return {
    name: "" || product?.name,
    price: "" || product?.price,
    description: "" || product?.description,
    stock: "" || product?.price,
    categoryId: "" || product?.categoryId,
    speciesId: "" || product?.speciesId,
    brandsId: "" || product?.brandsId,
  };
}
