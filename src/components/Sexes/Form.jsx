import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addNewSex, putSex } from "../../services/sexes";
import { addSex } from "../../redux/actions/sexes";
import { Success } from "../Global/Alerts/Success";

export default function Form({ setShowModal, sex }) {
  const dispatch = useDispatch(sex);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      type: Yup.string().required("El nombre del sexo es requerido"),
    }),
    onSubmit: (values) => {
      if (sex) {
        putSex(values, sex?.id).then(() => {
          dispatch(addSex(values));
          setShowModal(false);
          Success("Se actualizo el sexo");
        });
        return;
      }
      addNewSex(values).then(() => {
        dispatch(addSex(values));
        setShowModal(false);
        Success("Se agrego el sexo");
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
            placeholder="Ingresa el nombre del sexo"
            defaultValue={sex && sex?.type}
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
          {sex ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  );
}

function initialValues(sex) {
  return {
    type: "" || sex?.type,
  };
}
