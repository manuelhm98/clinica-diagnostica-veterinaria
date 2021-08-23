import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Success } from "../Global/Alerts/Success";
import {
  addNewDewormingType,
  editDewormingType,
} from "../../services/deworming-type";
import { addDewormingType } from "../../redux/actions/deworming-type";

export default function Form({ setShowModal, dtype }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(dtype),
    validationSchema: Yup.object({
      type: Yup.string().required(
        "El nombre del tipo de desparacitacion es requerido"
      ),
      brand: Yup.string().required(
        "el nombre de la marca del tipo de desparacitacion es requerido"
      ),
    }),
    onSubmit: (values) => {
      if (dtype) {
        editDewormingType(values, dtype?.id).then(() => {
          dispatch(addDewormingType(values));
          setShowModal(false);
          Success("Se actualizo el registro con exito");
        });
        return;
      }
      addNewDewormingType(values).then(() => {
        dispatch(addDewormingType(values));
        setShowModal(false);
        Success("Se agrego el registro con exito");
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
            placeholder="Ingresa el nombre del tipo de despacitacion "
            defaultValue={dtype && dtype?.type}
            className={
              "w-80 border p-1 text-sm text-gray-600 px-2 rounded outline-none hover:border-green-400 " +
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
          <label className="text-sm text-gray-400">Marca</label>
          <input
            type="text"
            name="brand"
            onChange={formik.handleChange}
            defaultValue={dtype && dtype?.brand}
            placeholder="Ingresa el nombre de la marca del tipo de despacitacion "
            className={
              "w-80 border p-1 text-sm text-gray-600 px-2 rounded outline-none hover:border-green-400 " +
              (formik.errors.brand && formik.touched.brand
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.brand && formik.touched.brand && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.brand}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 mt-4 w-full text-white rounded px-12 py-1 text-xs"
        >
          {dtype ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  );
}

function initialValues(dtype) {
  return {
    type: "" || dtype?.type,
    brand: "" || dtype?.brand,
  };
}
