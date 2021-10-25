import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Success } from "../Global/Alerts/Success";
import { Error } from "../Global/Alerts/Error";
import { addNewVendor, putVendor } from "../../services/vendors";
import { addVendor } from "../../redux/actions/vendors";

export default function Form({ setShowModal, vendor }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(vendor),
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requeriso"),
      nameVendor: Yup.string().required("EL nombre de vendedor es requerido"),
      phone: Yup.string().required("El numero de telefono es requerido"),
      addres: Yup.string().required("La direccion es requerida"),
      nBank: Yup.string().required("El numero de banco es requerido"),
      bank: Yup.string().notRequired(),
      celPhone: Yup.string().notRequired(),
    }),
    onSubmit: (values) => {
      if (vendor) {
        putVendor(values, vendor?.id).then(() => {
          setShowModal(false);
          dispatch(addVendor(values));
          Success("Se actualizo el proveedor!!");
        });
        return;
      }
      addNewVendor(values)
        .then(() => {
          setShowModal(false);
          dispatch(addVendor(values));
          Success("Se agrego el proveedor!!");
        })
        .catch(() => {
          Error("Ah ocurrido un error inesperado");
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
            placeholder="Ingresa el nombre del proveedor"
            defaultValue={vendor && vendor?.name}
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
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
          <label className="text-sm text-gray-400">Nombre de vendedor</label>
          <input
            type="text"
            name="nameVendor"
            onChange={formik.handleChange}
            placeholder="Ingresa el nombre de vendedor"
            defaultValue={vendor && vendor?.nameVendor}
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.nameVendor && formik.touched.nameVendor
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.nameVendor && formik.touched.nameVendor && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.nameVendor}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Telefono</label>
          <input
            type="text"
            name="phone"
            onChange={formik.handleChange}
            placeholder="Ingresa el numero de telefono"
            defaultValue={vendor && vendor?.phone}
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
            name="celPhone"
            onChange={formik.handleChange}
            placeholder="Ingresa el numero de celular"
            defaultValue={vendor && vendor?.celPhone}
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.celPhone && formik.touched.celPhone
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.celPhone && formik.touched.celPhone && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.celPhone}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Direccion</label>
          <input
            type="text"
            name="addres"
            onChange={formik.handleChange}
            placeholder="Ingresa la direccion"
            defaultValue={vendor && vendor?.addres}
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.addres && formik.touched.addres
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.addres && formik.touched.addres && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.addres}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Numero de banco</label>
          <input
            type="text"
            name="nBank"
            onChange={formik.handleChange}
            placeholder="Ingresa el numero de banco"
            defaultValue={vendor && vendor?.nBank}
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.nBank && formik.touched.nBank
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.nBank && formik.touched.nBank && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.nBank}
            </span>
          )}
        </div>
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Banco</label>
          <input
            type="text"
            name="bank"
            onChange={formik.handleChange}
            placeholder="Ingresa el nombre del banco"
            defaultValue={vendor && vendor?.bank}
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.bank && formik.touched.bank
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.bank && formik.touched.bank && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.bank}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 mt-4 w-full text-white rounded px-12 py-1 text-xs"
        >
          {vendor ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  );
}

function initialValues(vendor) {
  return {
    name: "" || vendor?.name,
    nameVendor: "" || vendor?.nameVendor,
    phone: "" || vendor?.phone,
    addres: "" || vendor?.addres,
    nBank: "" || vendor?.nBank,
    bank: "" || vendor?.bank,
    celPhone: "" || vendor?.celPhone,
  };
}
