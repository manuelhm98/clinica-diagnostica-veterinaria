import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  addNewEstethicService,
  putEstethicService,
} from "../../../services/estethic";
import { newEstethicService } from "../../../redux/actions/estethic-service";
import { Success } from "../../Global/Alerts/Success";

const Form = ({ setShowModal, est }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "" || est?.name,
      price: "" || est?.price,
      size: "" || est?.size,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre del servicio es requerido"),
      price: Yup.number()
        .required("El precio es requerido")
        .typeError("Precio invalido"),
      size: Yup.string().required("El tamaño es requerido"),
    }),
    onSubmit: (values) => {
      if (est) {
        putEstethicService(values, est?.id).then(() => {
          Success("Se actualizo el servicio");
          dispatch(newEstethicService(values));
          setShowModal(false);
        });
        return;
      }
      addNewEstethicService(values).then(() => {
        Success("Se agrego el servicio");
        dispatch(newEstethicService(values));
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
            placeholder="Ingresa el nombre del color"
            defaultValue={est && est?.name}
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
          <label className="text-sm text-gray-400">Precio</label>
          <input
            type="text"
            name="price"
            onChange={formik.handleChange}
            placeholder="Ingresa el el precio del servicio"
            defaultValue={est && est?.price}
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
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
        <div className="flex flex-col p-1 mt-1">
          <label className="text-sm text-gray-400">Tamaño</label>
          <input
            type="text"
            name="size"
            defaultValue={est && est?.size}
            onChange={formik.handleChange}
            placeholder="Ingresa el el precio del servicio"
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
              (formik.errors.size && formik.touched.size
                ? "border-red-400"
                : "border-gray-300")
            }
          />
          {formik.errors.size && formik.touched.size && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.size}
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
};

export default Form;
