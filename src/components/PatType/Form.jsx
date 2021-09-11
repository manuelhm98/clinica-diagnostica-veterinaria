import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addNewPatType, putPatType } from "../../services/pat-type";
import { addPatType } from "../../redux/actions/pat-type";
import { Success } from "../Global/Alerts/Success";

export default function Form({ setShowModal, patType }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(patType),
    validationSchema: Yup.object({
      type: Yup.string().required(
        "El nombre del tipo de paciente es requerido"
      ),
    }),
    onSubmit: (values) => {
      if (patType) {
        putPatType(values, patType?.id).then(() => {
          dispatch(addPatType(values));
          setShowModal(false);
          Success("Se actualizo el tipo de paciente");
        });
        return;
      }
      addNewPatType(values).then(() => {
        dispatch(addPatType(values));
        setShowModal(false);
        Success("Se agrego  el tipo de paciente");
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
            placeholder="Ingresa el nombre del tipo de paciente"
            defaultValue={patType && patType?.type}
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
          {patType ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  );
}

function initialValues(patType) {
  return {
    type: "" || patType?.type,
  };
}
