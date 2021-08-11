import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../services/auth";
import { Error } from "../Global/Alerts/Error";
import { Success } from "../Global/Alerts/Success";
import { newLogin } from "../../redux/actions/auth";

export default function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Direccion de correo invalida")
        .required("El email es requerido"),
      password: yup.string().required("La contraseña es requerida"),
    }),
    onSubmit: (values) => {
      login(values).then((res) => {
        if (!res.token) {
          Error("Correo o contraseña invalida");
          return;
        }
        dispatch(newLogin(res.token));
        Success("Los datos son correctos Bienvenido!!");
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className=" mr-20 mt-6">
      <div className="flex flex-col">
        <label className="text-xs font-medium text-gray-500">Email</label>
        <input
          type="text"
          name="email"
          onChange={formik.handleChange}
          placeholder="Escribe tu email"
          className={
            "border-0 border-b-2 w-full outline-none text-xs py-1 text-gray-500 " +
            (formik.errors.email && formik.touched.email
              ? "border-red-400"
              : "border-b-2")
          }
        />
        {formik.errors.email && formik.touched.email && (
          <span className="text-xs text-red-400">{formik.errors.email}</span>
        )}
      </div>
      <div className="flex flex-col mt-10">
        <label className="text-xs font-medium text-gray-500">Contraseña</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          placeholder="Escribe tu contraseña"
          className={
            "border-0 border-b-2 w-full outline-none text-xs py-1 text-gray-500 " +
            (formik.errors.password && formik.touched.password
              ? "border-red-400"
              : "border-b-2")
          }
        />
        {formik.errors.password && formik.touched.password && (
          <span className="text-xs text-red-400">{formik.errors.password}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white w-full mr-10 mt-3 text-xs py-2 font-medium border-0 rounded-md"
      >
        Iniciar Sesion
      </button>
    </form>
  );
}
