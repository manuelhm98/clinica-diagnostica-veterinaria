import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Success } from "../Global/Alerts/Success";
import { putDoctor } from "../../services/doctor";
import { addDoctor } from "../../redux/actions/doctors";

export default function Form({ setShowModal, doctor, id }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(doctor),
    validationSchema: Yup.object({
      direction: Yup.string().required("La direccion es requerido"),
      cellphone: Yup.string().required("El celular es requerido"),
      phone: Yup.string().required("El telefono es requerido"),
      jvpmv: Yup.string().required("La junta es requerida"),
    }),
    onSubmit: (values) => {
      putDoctor(values, id).then(() => {
        setShowModal(false);
        Success("Se actualizo el doctor");
        dispatch(addDoctor(values));
      });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Direccion</label>
          <input
            type="text"
            name="direction"
            onChange={formik.handleChange}
            placeholder="Ingresa la direccion"
            defaultValue={doctor && doctor?.direction}
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
          <label className="text-sm text-gray-400">Telefono</label>
          <input
            type="text"
            name="phone"
            onChange={formik.handleChange}
            defaultValue={doctor && doctor.phone}
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
          <label className="text-sm text-gray-400">Celular</label>
          <input
            type="text"
            name="cellphone"
            onChange={formik.handleChange}
            placeholder="Ingresa el nombre del rol"
            defaultValue={doctor && doctor?.cellphone}
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
          <label className="text-sm text-gray-400">j.v.p.m.v</label>
          <input
            type="text"
            name="jvpmv"
            onChange={formik.handleChange}
            placeholder="Ingresa el nombre del rol"
            defaultValue={doctor && doctor?.jvpmv}
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.jvpmv && formik.touched.jvpmv
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.jvpmv && formik.touched.jvpmv && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.jvpmv}
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

function initialValues(doctor) {
  return {
    direction: "" || doctor?.direction,
    cellphone: "" || doctor?.cellphone,
    phone: "" || doctor?.phone,
    jvpmv: "" || doctor?.jvpmv,
    specialityId: "" || doctor?.specialityId,
    usersId: "" || doctor?.usersId,
  };
}
