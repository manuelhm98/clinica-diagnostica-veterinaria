import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Success } from "../Global/Alerts/Success";
import { addNewRole, putRole } from "../../services/role";
import { addRole } from "../../redux/actions/role";

export default function Form({ setShowModal, rol }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(rol),
    validationSchema: Yup.object({
      rol: Yup.string().required("El nombre del rol es requerido"),
    }),
    onSubmit: (values) => {
      if (rol) {
        putRole(values, rol?.id).then(() => {
          dispatch(addRole(values));
          setShowModal(false);
          Success("Se actualizo el rol");
        });
        return;
      }
      addNewRole(values).then(() => {
        dispatch(addRole(values));
        setShowModal(false);
        Success("Se agrego el rol");
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
            name="rol"
            onChange={formik.handleChange}
            placeholder="Ingresa el nombre del rol"
            defaultValue={rol && rol?.rol}
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.rol && formik.touched.rol
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.rol && formik.touched.rol && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.rol}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 mt-4 w-full text-white rounded px-12 py-1 text-xs"
        >
          {rol ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  );
}

function initialValues(rol) {
  return {
    rol: "" || rol?.rol,
  };
}
