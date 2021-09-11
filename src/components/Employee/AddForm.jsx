import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Success } from "../Global/Alerts/Success";
import { Error } from "../Global/Alerts/Error";
import { addNewEmployee } from "../../services/employee";
import { addEmployee } from "../../redux/actions/employee";

export default function Form({ setShowModal, roles, shifts }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      names: Yup.string().required("El nombre del empleado es requerido"),
      lastnames: Yup.string().required(
        "Los apellido del empleado son requeridos"
      ),
      email: Yup.string()
        .email("Direccion de correo invalida")
        .required("El email es requerido"),
      shiftsId: Yup.number()
        .typeError("Turno invalido")
        .required("Debes seleccionar un turno"),
      rolesId: Yup.number()
        .typeError("Rol invalido")
        .required("Debes seleccionar un rol"),
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
      addNewEmployee(values)
        .then(() => {
          dispatch(addEmployee(values));
          setShowModal(false);
          Success("Se agrego el usuario");
        })
        .catch(() => {
          Error("Ah ocurrido un error inesperado");
          setShowModal(false);
        });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-xs text-gray-400">Nombre</label>
          <input
            type="text"
            name="names"
            onChange={formik.handleChange}
            placeholder="Ingresa el nombre del empleado"
            className={
              "w-80 border py-1 px-2 text-xs text-gray-500 rounded outline-none hover:border-green-400 " +
              (formik.errors.names && formik.touched.names
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.names && formik.touched.names && (
            <span className="text-xs font-normal text-red-400">
              {formik.errors.names}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-xs text-gray-400">Apellido</label>
          <input
            type="text"
            name="lastnames"
            onChange={formik.handleChange}
            placeholder="Ingresa el apellido del empleado"
            className={
              "w-80 border py-1 px-2 text-xs text-gray-500 rounded outline-none hover:border-green-400 " +
              (formik.errors.lastnames && formik.touched.lastnames
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.lastnames && formik.touched.lastnames && (
            <span className="text-xs font-normal text-red-400">
              {formik.errors.lastnames}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-xs text-gray-400">Email</label>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            placeholder="Ingresa el email del empleado"
            className={
              "w-80 border py-1 px-2 text-xs text-gray-500 rounded outline-none hover:border-green-400 " +
              (formik.errors.email && formik.touched.email
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.email && formik.touched.email && (
            <span className="text-xs font-normal text-red-400">
              {formik.errors.email}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-xs text-gray-400">Turno</label>
          <select
            defaultValue={"DEFAULT"}
            name="shiftsId"
            onChange={formik.handleChange}
            className={
              "w-80 border py-1 px-2 text-xs text-gray-500 rounded outline-none hover:border-green-400 " +
              (formik.errors.shiftsId && formik.touched.shiftsId
                ? "border-red-400"
                : "border-gray-300")
            }
          >
            <option selected value={"DEFAULT"} disabled>
              Selecciona el turno
            </option>
            {shifts &&
              shifts.map((shift) => (
                <option key={shift.id} value={shift.id}>
                  {shift.type}
                </option>
              ))}
          </select>
          {formik.errors.shiftsId && formik.touched.shiftsId && (
            <span className="text-xs font-normal text-red-400">
              {formik.errors.shiftsId}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-xs text-gray-400">Rol</label>
          <select
            name="rolesId"
            onChange={formik.handleChange}
            defaultValue={"DEFAULT"}
            className={
              "w-80 border py-1 px-2 text-xs text-gray-500 rounded outline-none hover:border-green-400 " +
              (formik.errors.rolesId && formik.touched.rolesId
                ? "border-red-400"
                : "border-gray-300")
            }
          >
            <option selected value={"DEFAULT"} disabled>
              Selecciona el rol
            </option>
            {roles &&
              roles.map((rol) => (
                <option key={rol.id} value={rol.id}>
                  {rol.rol}
                </option>
              ))}
          </select>
          {formik.errors.rolesId && formik.touched.rolesId && (
            <span className="text-xs font-normal text-red-400">
              {formik.errors.rolesId}
            </span>
          )}
        </div>
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
          Agregar
        </button>
      </form>
    </div>
  );
}

function initialValues(emp) {
  return {
    names: "",
    lastnames: "",
    email: "",
    shiftsId: "",
    rolesId: "",
    password: "",
    rePassword: "",
  };
}
