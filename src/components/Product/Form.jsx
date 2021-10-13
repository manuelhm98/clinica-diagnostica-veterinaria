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
      dateAdmission: Yup.date().required("La fecha de admision es requerida"),
      dateExpiry: Yup.date().required("La fecha de expiracion es requerida"),
      description: Yup.string().required("La descripcion es requerida"),
      stock: Yup.number()
        .required("El stock es requerido")
        .typeError("Stock invalido"),
      categoryId: Yup.number().required("Debes seleccionar una categoria"),
      speciesId: Yup.number().required("Debes seleccionar la especie"),
      vendorsId: Yup.number().required("Debes seleccionar el proveedor"),
      brandsId: Yup.number().required("Debes seleccionar la marca"),
    }),
    onSubmit: (values) => {
      if (product) {
        putProduct(values, product?.id).then((res) => {
          if (res.product) {
            if (productfile) {
              uploadProductPhoto(res.product?.id, productfile).then(() => {
                Success("Se actualizo el producto");
                setShowModal(false);
                dispatch(addProduct(values));
              });
              return;
            }
            Success("Se actualizo el producto");
            setShowModal(false);
            dispatch(addProduct(values));
            return;
          }
        });
        return;
      }

      addNewProduct(values).then((res) => {
        if (res.product) {
          if (productfile) {
            uploadProductPhoto(res.product?.id, productfile).then(() => {
              Success("Se agrego el nuevo producto");
              setShowModal(false);
              dispatch(addProduct(values));
            });
            return;
          }
          Success("Se agrego el nuevo producto");
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
            <div className="grid grid-cols-2 p-1 mt-1">
              <div className="flex flex-col p-1 mt-1">
                <label className="text-sm text-gray-400">
                  Fecha de admision
                </label>
                <input
                  type="date"
                  name="dateAdmission"
                  onChange={formik.handleChange}
                  defaultValue={product && product?.dateAdmission}
                  className={
                    "w-auto border p-1 text-sm rounded outline-none hover:border-green-400 " +
                    (formik.errors.dateAdmission && formik.touched.dateAdmission
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                />
                {formik.errors.dateAdmission &&
                  formik.touched.dateAdmission && (
                    <span className="text-sm font-normal text-red-400">
                      {formik.errors.dateAdmission}
                    </span>
                  )}
              </div>
              <div className="flex flex-col p-1 mt-1">
                <label className="text-sm text-gray-400">
                  Fecha de expiracion
                </label>
                <input
                  type="date"
                  name="dateExpiry"
                  onChange={formik.handleChange}
                  defaultValue={product && product?.dateExpiry}
                  placeholder="Ingresa el nombre de la categoria"
                  className={
                    "w-auto border p-1 text-sm rounded outline-none hover:border-green-400 " +
                    (formik.errors.dateExpiry && formik.touched.dateExpiry
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                />
                {formik.errors.dateExpiry && formik.touched.dateExpiry && (
                  <span className="text-sm font-normal text-red-400">
                    {formik.errors.dateExpiry}
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
              className="bg-blue-600 mt-4 w-full text-white rounded px-12 py-1 text-xs"
            >
              {product ? "Actualizar" : "Agregar"}
            </button>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-2">
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
                <label className="text-sm text-gray-400">Proveedor</label>
                <select
                  name="vendorsId"
                  onChange={formik.handleChange}
                  defaultValue={product ? product?.vendorsId : "DEFAULT"}
                  className={
                    "border p-1 text-sm rounded outline-none hover:border-green-400 " +
                    (formik.errors.vendorsId && formik.touched.vendorsId
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                >
                  <option disabled selected value={"DEFAULT"}>
                    Seleccionar el proveedor
                  </option>
                  {vendors?.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.nameVendor}
                    </option>
                  ))}
                </select>
                {formik.errors.vendorsId && formik.touched.vendorsId && (
                  <span className="text-sm font-normal text-red-400">
                    {formik.errors.vendorsId}
                  </span>
                )}
              </div>
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
    dateAdmission: "" || product?.dateAdmission,
    dateExpiry: "" || product?.dateExpiry,
    description: "" || product?.description,
    stock: "" || product?.price,
    categoryId: "" || product?.categoryId,
    speciesId: "" || product?.speciesId,
    vendorsId: "" || product?.vendorsId,
    brandsId: "" || product?.brandsId,
  };
}
