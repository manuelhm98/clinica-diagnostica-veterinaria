import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  addNewServiceType,
  putServiceType,
} from "../../../services/service-type";
import { addServiceType } from "../../../redux/actions/service-type";
import { Success } from "../../Global/Alerts/Success";

export default function Form({ setShowModal, serviceType }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(serviceType),
    validationSchema: Yup.object({
      type: Yup.string().required(
        "El nombre del tipo de servicio es requerido"
      ),
      price: Yup.number()
        .required("El precio del tipo de servicio es requerido")
        .typeError("Precio invalido"),
    }),
    onSubmit: (values) => {
      if (serviceType) {
        putServiceType(values, serviceType?.id).then(() => {
          dispatch(addServiceType(values));
          Success("Se actualizo con exito");
          setShowModal(false);
        });
      return;
      }
      addNewServiceType(values).then(() => {
        dispatch(addServiceType(values));
        Success("Se agrego con exito");
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
            name="type"
            onChange={formik.handleChange}
            placeholder="Ingresa el nombre del tipo de servicio"
            defaultValue={serviceType?.type}
            className={
              "w-80 border text-gray-500 p-1 text-sm rounded outline-none hover:border-green-400 " +
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
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Precio</label>
          <input
            type="text"
            name="price"
            onChange={formik.handleChange}
            defaultValue={serviceType?.price}
            placeholder="Ingresa el precio del tipo de servicio"
            className={
              "w-80 border p-1 text-gray-500 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.price && formik.touched.price
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.price && formik.touched.price && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.price}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 mt-4 w-full text-white rounded px-12 py-1 text-xs"
        >
          {serviceType ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
}

function initialValues(serviceType) {
  return {
    type: "" || serviceType?.type,
    price: null || serviceType?.price,
  };
}
