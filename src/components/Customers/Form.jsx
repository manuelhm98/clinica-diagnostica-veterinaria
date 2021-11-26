import React, { useRef } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  addNewCustomer,
  putCustomer,
  validPhone,
} from "../../services/customers";
import { addCustomer } from "../../redux/actions/customers";
import { Success } from "../Global/Alerts/Success";
import { Error } from "../Global/Alerts/Error";
import { Warning } from "../Global/Alerts/Warning";

export default function Form({ setShowModal, customer }) {
  const dispatch = useDispatch();
  const cellphone = useRef();
  const formik = useFormik({
    initialValues: initialValues(customer),
    validationSchema: Yup.object({
      names: Yup.string().required("Los nombres son requeridos"),
      lastname: Yup.string().required("El apellido es requerido"),
      direction: Yup.string().required("La direccion es requerida"),
      cellphone: Yup.string().notRequired(
        "Estas seguro de dejar vacio este campo"
      ),
      phone: Yup.string().notRequired("Estas seguro de dejar vacio este campo"),
      email: Yup.string().notRequired("Estas seguro de dejar vacio este campo"),
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
      addNewCustomer(values).then((res) => {
        if (!res.ok) {
          Error(res.msg);
          return;
        }
        dispatch(addCustomer(values));
        setShowModal(false);
        Success("Se agrego el cliente");
      });
    },
  });
  const handlecheck = () => {
    const value = cellphone.current.value;
    if (value.trim() === "") {
      Warning("Debes escribir el numero de celular");
      return;
    }
    const data = {
      cellphone: value,
    };
    validPhone(data).then((res) => {
      if (!res.ok) {
        Error("Ya existe un cliente con este telefono");
        return;
      }
      Success("Este telefono no ah sido registrado");
    });
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-xs  sm:text-sm text-gray-400">Nombre</label>
          <input
            type="text"
            name="names"
            onChange={formik.handleChange}
            placeholder="Ingresa el nombre completo"
            defaultValue={customer && customer?.names}
            className={
              "w-full border p-1 text-xs sm:text-sm rounded outline-none hover:border-green-400 " +
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
          <label className="text-xs sm:text-sm text-gray-400">Apellido</label>
          <input
            type="text"
            name="lastname"
            onChange={formik.handleChange}
            placeholder="Ingresa los apellidos"
            defaultValue={customer && customer?.lastname}
            className={
              "w-full border p-1 text-xs sm:text-sm rounded outline-none hover:border-green-400 " +
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
          <label className="text-xs sm:text-sm text-gray-400">Direccion</label>
          <input
            type="text"
            name="direction"
            onChange={formik.handleChange}
            placeholder="Ingresa la direccion"
            defaultValue={customer && customer?.direction}
            className={
              "w-full border p-1 text-xs sm:text-sm rounded outline-none hover:border-green-400 " +
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
          {!customer ? (
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-xs sm:text-sm text-gray-400">
                  Numero de Celular
                </label>
                <input
                  type="text"
                  ref={cellphone}
                  name="cellphone"
                  onChange={formik.handleChange}
                  placeholder="Ingresa el numero de celular"
                  defaultValue={
                    customer && customer?.cellphone !== "0"
                      ? customer?.cellphone
                      : ""
                  }
                  className={
                    " border p-1 text-xs sm:text-sm rounded outline-none hover:border-green-400 " +
                    (formik.errors.cellphone && formik.touched.cellphone
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                />
              </div>
              <button
                onClick={handlecheck}
                type="button"
                className="bg-green-500 text-xs sm:text-sm text-white rounded py-1 mt-4"
              >
                Verificar
              </button>
            </div>
          ) : (
            <div className="flex flex-col p-1 mt-1">
              <label className="text-xs sm:text-sm text-gray-400">Celular</label>
              <input
                type="text"
                name="cellphone"
                onChange={formik.handleChange}
                placeholder="Ingresa el numero de celular"
                className={
                  "w-full border p-1 text-xs sm:text-sm rounded outline-none hover:border-green-400 " +
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
          )}

          {formik.errors.cellphone && formik.touched.cellphone && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.cellphone}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-xs sm:text-sm text-gray-400">Numero de telefono</label>
          <input
            type="text"
            name="phone"
            onChange={formik.handleChange}
            placeholder="Ingresa el numero de telefono"
            defaultValue={
              customer && customer?.phone !== "0" ? customer?.phone : ""
            }
            className={
              "w-full border p-1 text-xs sm:text-sm rounded outline-none hover:border-green-400 " +
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
          <label className="text-xs sm:text-sm text-gray-400">Email</label>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            placeholder="Ingresa el correo electronico"
            defaultValue={
              customer && customer?.email !== " " ? customer?.email : ""
            }
            className={
              "w-full border p-1 text-xs sm:text-sm rounded outline-none hover:border-green-400 " +
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
    cellphone: 0 || customer?.cellphone,
    phone: 0 || customer?.phone,
    email: " " || customer?.email,
  };
}
