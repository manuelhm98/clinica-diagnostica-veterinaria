import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ChangePassword({id,setShowCP}) {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(8, "La contraseña dede contener 8 caracteres"),
      rePassword: Yup.string()
        .required("Debes confirmar tu contraseña")
        .oneOf(
          [Yup.ref("password"), null],
          "Las contraseñas deben ser iguales"
        ),
    }),
    onSubmit: (values) => {
        
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            placeholder="Ingresa la contraseña del empleado"
            className={
              "w-80 border py-1 px-2 text-xs text-gray-500 rounded outline-none hover:border-green-400 " +
              (formik.errors.password && formik.touched.password
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.password && formik.touched.password && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.password}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Repite la contraseña</label>
          <input
            type="password"
            name="rePassword"
            onChange={formik.handleChange}
            placeholder="Repite la contraseña"
            className={
              "w-80 border py-1 px-2 text-xs text-gray-500 rounded outline-none hover:border-green-400 " +
              (formik.errors.rePassword && formik.touched.rePassword
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.rePassword && formik.touched.rePassword && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.rePassword}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 mt-4 w-full text-white rounded px-12 py-2 text-xs"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

function initialValues() {
  return {
    password: "",
    rePassword: "",
  };
}
