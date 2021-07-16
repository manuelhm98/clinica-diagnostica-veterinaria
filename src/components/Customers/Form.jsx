import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addNewCustomer } from "../../services/customers";
import { addCustomer } from "../../redux/actions/customers";

export default function Form({ setShowModal }) {
  const dispatch = useDispatch();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      names: Yup.string().required("Los nombres son requeridos"),
      lastname: Yup.string().required("El apellido es requerido"),
      direction: Yup.string().required("La direccion es requerida"),
      cellphone: Yup.string()
        .matches(phoneRegExp, "Numero de telefono invalido")
        .required("El numero de telefono es invalido"),
      phone: Yup.string()
        .matches(phoneRegExp, "Numero de telefono invalido")
        .required("El numero de telefono es invalido"),
      email: Yup.string()
        .email("Direccion de correo invalida")
        .required("El correo electronico es requerido"),
      state: Yup.number().required("El estado del cliente es requeido"),
    }),
    onSubmit: (values) => {
      addNewCustomer(values).then(() => {
        dispatch(addCustomer(values));
        setShowModal(false);
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
            name="names"
            onChange={formik.handleChange}
            placeholder="Ingresa el nombre completo"
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.names && formik.touched.names
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.names && formik.touched.names && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.names}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Apellido</label>
          <input
            type="text"
            name="lastname"
            onChange={formik.handleChange}
            placeholder="Ingresa los apellidos"
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.lastname && formik.touched.lastname
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.lastname && formik.touched.lastname && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.lastname}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Direccion</label>
          <input
            type="text"
            name="direction"
            onChange={formik.handleChange}
            placeholder="Ingresa la direccion"
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.direction && formik.touched.direction
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.direction && formik.touched.direction && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.direction}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Numero de Celular</label>
          <input
            type="text"
            name="cellphone"
            onChange={formik.handleChange}
            placeholder="Ingresa el numero de celular"
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.cellphone && formik.touched.cellphone
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.cellphone && formik.touched.cellphone && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.cellphone}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Numero de telefono</label>
          <input
            type="text"
            name="phone"
            onChange={formik.handleChange}
            placeholder="Ingresa el numero de telefono"
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.phone && formik.touched.phone
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.phone && formik.touched.phone && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.phone}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Email</label>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            placeholder="Ingresa el correo electronico"
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.email && formik.touched.email
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.email && formik.touched.email && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.email}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Estado del cliente</label>
          <select
            name="state"
            onChange={formik.handleChange}
            defaultValue={"DEFAULT"}
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.state && formik.touched.state
                ? "border-red-400"
                : "border-gray-300")
            }
          >
            <option value="DEFAULT" disabled>
              Selecciona el estado del cliente
            </option>
            <option value={1}>Activo</option>
            <option value={0}>Inactivo</option>
          </select>
          {formik.errors.state && formik.touched.state && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.state}
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

function initialValues() {
  return {
    names: "",
    lastname: "",
    direction: "",
    cellphone: "",
    phone: "",
    email: "",
    state: "",
  };
}
