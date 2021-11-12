import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  addHospitalService,
  putHospitalServices,
} from "../../services/hospital-service";
import { useDispatch } from "react-redux";
import { Success } from "../Global/Alerts/Success";
import { newHospitalService } from "../../redux/actions/hospital-services";

export default function Form({ setShowModal, service }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "" || service?.name,
      price: 0 || Number(service?.price),
    },
    validationSchema: yup.object({
      name: yup.string().required("El nombre del servicio es requerido"),
      price: yup
        .number()
        .required("El precio es requerido")
        .typeError("Precio invalido"),
    }),
    onSubmit: (values) => {
      if (service) {
        putHospitalServices(values, service?.id).then(() => {
          Success("Se actualizo con exito");
          dispatch(newHospitalService(values));
          setShowModal(false);
        });
        return;
      }
      addHospitalService(values).then(() => {
        Success("Se agrego el registro");
        dispatch(newHospitalService(values));
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
            name="name"
            onChange={formik.handleChange}
            placeholder="Ingresa el nombre del servicio"
            defaultValue={service && service?.name}
            className={
              "w-80 border p-1 text-gray-600 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.name && formik.touched.name
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.name && formik.touched.name && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.name}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Precio</label>
          <input
            type="text"
            name="price"
            onChange={formik.handleChange}
            placeholder="Ingresa el precio del servicio"
            defaultValue={service && service?.price}
            className={
              "w-80 border p-1 text-gray-600 text-sm rounded outline-none hover:border-green-400 " +
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
          {service ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  );
}
