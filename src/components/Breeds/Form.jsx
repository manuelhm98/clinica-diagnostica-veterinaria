import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addBreed } from "../../redux/actions/breeds";
import { addNewBreed } from "../../services/breeds";

export default function Form({ species,setShowModal }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      type: Yup.string().required("El nombre de la raza es requerido"),
      speciesId: Yup.number().required("Debes seleccionar una especie"),
    }),
    onSubmit: (values) => {
      addNewBreed(values).then((res) => {
        dispatch(addBreed(values));
        setShowModal(false)
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
            placeholder="Ingresa el nombre de la especie"
            className={
              "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
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
          <label className="text-sm text-gray-400">Especie</label>
          <select
            defaultValue={"DEFAULT"}
            className={
              "border px-4 py-1 rounded hover:border-green-400 outline-none " +
              (formik.errors.speciesId && formik.touched.speciesId
                ? "border-red-400"
                : "border-gray-300")
            }
            onChange={formik.handleChange}
            name="speciesId"
          >
            <option value="DEFAULT" disabled>
              selecciona una especie
            </option>
            {species.map((specie) => (
              <option key={specie.type} value={specie.id}>
                {specie.type}
              </option>
            ))}
          </select>
          {formik.errors.speciesId && formik.touched.speciesId && (
            <span className="text-sm font-normal text-red-400">
              {formik.errors.speciesId}
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
    type: "",
    speciesId: "",
  };
}
