import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Success } from "../Global/Alerts/Success";
import { addNewBrand, putBrand } from "../../services/brand";
import { addBrand } from "../../redux/actions/brand";

export default function Form({ setShowModal, brand }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(brand),
    validationSchema: Yup.object({
      brand: Yup.string().required("El nombre de la marca es requerido"),
    }),
    onSubmit: (values) => {
      if (brand) {
        putBrand(values, brand.id).then(() => {
          Success("Se actualizo la marca");
          setShowModal(false);
          dispatch(addBrand(values));
        });
        return;
      }
      addNewBrand(values).then(() => {
        Success("Se agrego la nueva marca");
        setShowModal(false);
        dispatch(addBrand(values));
      });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Nombre</label>
          <input
            type="text"
            name="brand"
            onChange={formik.handleChange}
            defaultValue={brand && brand.brand}
            placeholder="Ingresa el nombre de la marca"
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.brand && formik.touched.brand
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.brand && formik.touched.brand && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.brand}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 mt-4 w-full text-white rounded px-12 py-1 text-xs"
        >
          {brand ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  );
}

function initialValues(brand) {
  return {
    brand: "" || brand?.brand,
  };
}
