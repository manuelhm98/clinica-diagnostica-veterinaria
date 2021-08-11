import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addNewColor, putColor } from "../../services/colors";
import { addColor } from "../../redux/actions/colors";
import { Success } from "../Global/Alerts/Success";

export default function Form({ setShowModal, color }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(color),
    validationSchema: Yup.object({
      type: Yup.string().required("El nombre del color es requerido"),
    }),
    onSubmit: (values) => {
      if (color) {
        putColor(color?.id, values).then(() => {
          dispatch(addColor(values));
          setShowModal(false);
          Success("Se actualizo el color");
        });
        return;
      }
      addNewColor(values).then(() => {
        dispatch(addColor(values));
        setShowModal(false);
        Success("Se agrego el color");
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
            placeholder="Ingresa el nombre del color"
            defaultValue={color && color.type}
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
          {color ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  );
}

function initialValues(color) {
  return {
    type: "" || color?.type,
  };
}
