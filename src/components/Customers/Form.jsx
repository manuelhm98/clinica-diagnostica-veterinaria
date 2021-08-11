import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addNewCustomer, putCustomer } from "../../services/customers";
import { addCustomer } from "../../redux/actions/customers";
import { Success } from "../Global/Alerts/Success";

export default function Form({ setShowModal, customer }) {
  const dispatch = useDispatch();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: initialValues(customer),
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
    }),
    onSubmit: (values) => {
      if (customer) {
        putCustomer(customer?.id, values).then(() => {
          dispatch(addCustomer(values));
          setShowModal(false);
          Success("Se actualizo el cliente");
        });
        return;
      }
      addNewCustomer(values).then(() => {
        dispatch(addCustomer(values));
        setShowModal(false);
        Success("Se agrego el cliente");
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
            defaultValue={customer && customer?.names}
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
            defaultValue={customer && customer?.lastname}
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
            defaultValue={customer && customer?.direction}
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
            defaultValue={customer && customer?.cellphone}
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
            defaultValue={customer && customer?.phone}
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
            defaultValue={customer && customer?.email}
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
        <button
          type="submit"
          className="bg-blue-600 mt-4 w-full text-white rounded px-12 py-1 text-xs"
        >
          {customer ? "Actualizar" : " Agregar"}
        </button>
      </form>
    </div>
  );
}

function initialValues(customer) {
  return {
    names: "" || customer?.names,
    lastname: "" || customer?.lastname,
    direction: "" || customer?.direction,
    cellphone: "" || customer?.cellphone,
    phone: "" || customer?.phone,
    email: "" || customer?.email,
  };
}
