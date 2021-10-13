import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Success } from "../Global/Alerts/Success";
import { addCategory } from "../../redux/actions/category";
import { addNewCategory, putCategory } from "../../services/category";

export default function Form({ setShowModal, category }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(category),
    validationSchema: Yup.object({
      type: Yup.string().required("El nombre de la categoria es requerido"),
    }),
    onSubmit: (values) => {
      if (category) {
        putCategory(values, category.id).then(() => {
          Success("Se actualizo la marca");
          setShowModal(false);
          dispatch(addCategory(values));
        });
        return;
      }
      addNewCategory(values).then(() => {
        Success("Se agrego la nueva marca");
        setShowModal(false);
        dispatch(addCategory(values));
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
            name="type"
            onChange={formik.handleChange}
            defaultValue={category && category?.type}
            placeholder="Ingresa el nombre de la categoria"
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.type && formik.touched.type
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.type && formik.touched.type && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.type}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 mt-4 w-full text-white rounded px-12 py-1 text-xs"
        >
          {category ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  );
}

function initialValues(category) {
  return {
    type: "" || category?.type,
  };
}
