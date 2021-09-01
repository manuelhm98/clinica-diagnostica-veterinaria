import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Success } from "../Global/Alerts/Success";
import { addNewSpecially, putSpecially } from "../../services/specialties";
import { addSpecially } from "../../redux/actions/specialties";

export default function Form({ setShowModal, specially, id }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(specially),
    validationSchema: Yup.object({
      type: Yup.string().required("El nombre de la especialidad es requerido"),
    }),
    onSubmit: (values) => {
      if (id) {
        putSpecially(values, id).then(() => {
          dispatch(addSpecially(values));
          setShowModal(false);
          Success("Se actualizo la especialidad");
        });
        return;
      }
      addNewSpecially(values).then(() => {
        dispatch(addSpecially(values));
        setShowModal(false);
        Success("Se agrego la especialidad");
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
            placeholder="Ingresa el nombre de la especialidad"
            defaultValue={specially && specially?.type}
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
          Agregar
        </button>
      </form>
    </div>
  );
}

function initialValues(specially) {
  return {
    type: "" || specially?.type,
  };
}
