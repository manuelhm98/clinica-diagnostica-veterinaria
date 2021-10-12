import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addNewProduct } from "../../services/product";
import {Success} from "../Global/Alerts/Success"
import {addProduct} from "../../redux/actions/product"

export default function Form({ species, categories, vendors, brands,setShowModal }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initial(),
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
      addNewProduct(values).then((res)=>{
        if(res.ok){
          Success("Se agrego el nuevo producto")
          setShowModal(false)
          dispatch(addProduct(values))
          return;
        }
      })
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
                defaultValue={""}
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
                  defaultValue={""}
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
                  defaultValue={""}
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
                  defaultValue={""}
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
                  defaultValue={""}
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
                defaultValue={""}
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
                defaultValue={"DEFAULT"}
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
              Agregar
            </button>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col p-1 mt-1">
                <label className="text-sm text-gray-400">Especie</label>
                <select
                  name="speciesId"
                  onChange={formik.handleChange}
                  defaultValue={"DEFAULT"}
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
                  defaultValue={"DEFAULT"}
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
                  {vendors?.map((v)=>(
                    <option key={v.id} value={v.id}>{v.nameVendor}</option>
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
                defaultValue={"DEFAULT"}
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
          </div>
        </div>
      </form>
    </div>
  );
}
function initial() {
  return {
    name: "",
    price: "",
    dateAdmission: "",
    dateExpiry: "",
    description: "",
    stock: "",
    categoryId: "",
    speciesId: "",
    vendorsId: "",
    brandsId: "",
  };
}
