import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { putPatient } from "../../../services/patients";
import { Success } from "../../Global/Alerts/Success";

export default function Form({
  patient,
  colors,
  patTypes,
  setReload,
  setShowEditModal,
}) {
  const formik = useFormik({
    initialValues: initialValues(patient),
    validationSchema: yup.object({
      names: yup.string().required("El nombre es requerido"),
      colorsId: yup.number().required("El color de la mascota es requerido"),
      patientstypeId: yup.number().required("EL tipo de paciente es requerido"),
    }),
    onSubmit: (values) => {
      const newValues = {
        ...patient,
        names: values.names,
        colorsId: values.colorsId,
        patientstypeId: values.patientstypeId,
        weight: values.weight,
        exp: values.exp,
      };
      putPatient(patient?.id, newValues).then(() => {
        Success("Se actualizo el paciente");
        setReload(true);
        setShowEditModal(false);
        return;
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label className="text-gray-500 text-xs">Nombre</label>
          <input
            className="border outline-none w-96 px-2 text-gray-500 py-1 text-sm rounded mt-2"
            type="text"
            name="names"
            onChange={formik.handleChange}
            defaultValue={patient?.names}
            placeholder="Escribe el nombre de la mascota"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-gray-500 text-xs">Color</label>
          <select
            onChange={formik.handleChange}
            defaultValue={patient?.colorsId}
            name="colorsId"
            className="border outline-none w-96 px-2 text-gray-500 py-1 text-sm rounded mt-2"
          >
            {colors.color &&
              colors.color.map((color) => (
                <option value={color.id} key={color.id}>
                  {color.type}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-gray-500 text-xs">Tipo de paciente</label>
          <select
            defaultValue={patient?.patientstypeId}
            onChange={formik.handleChange}
            name="patientstypeId"
            className="border w-96 outline-none px-2 text-gray-500 py-1 text-sm rounded mt-2"
          >
            {patTypes &&
              patTypes.map((patType) => (
                <option value={patType.id} key={patType.id}>
                  {patType.type}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col mt-1">
          <label className="text-gray-500 text-xs">Peso</label>
          <input
            className="border outline-none w-96 px-2 text-gray-500 py-1 text-sm rounded mt-2"
            type="text"
            name="weight"
            onChange={formik.handleChange}
            defaultValue={patient?.weight}
            placeholder="Escribe el nombre de la mascota"
          />
        </div>
        <div className="flex flex-col mt-1">
          <label className="text-gray-500 text-xs">N° de expediente</label>
          <input
            className="border outline-none w-96 px-2 text-gray-500 py-1 text-sm rounded mt-2"
            type="text"
            name="exp"
            onChange={formik.handleChange}
            defaultValue={patient?.exp}
            placeholder="Escribe el nombre de la mascota"
          />
        </div>
        <button className="bg-blue-500 text-white w-full rounded text-sm py-1 mt-4">
          Guardar
        </button>
      </div>
    </form>
  );
}

function initialValues(patient) {
  return {
    names: "" || patient?.names,
    colorsId: "" || patient?.colorsId,
    patientstypeId: "" || patient?.patientstypeId,
    weight: "" || patient?.weight,
    exp: "" || patient?.exp,
  };
}
