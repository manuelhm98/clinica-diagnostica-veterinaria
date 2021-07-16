import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addNewPatient } from "../../services/patients";
import { addPatient } from "../../redux/actions/patiences";

export default function Form({
  setShowModal,
  breeds,
  colors,
  sexes,
  customers,
  patTypes,
}) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      names: Yup.string().required("El nombre de la mascota es requerido"),
      age: Yup.number()
        .typeError("Esta no es una edad valida")
        .required("La edad es requerida"),
      birthday: Yup.date().required("La fecha de nacimiento es requerida"),
      state: Yup.number().required("El estado de la mascota es requerido"),
      patientstypeId: Yup.number().required("El tipo de paciente es requerido"),
      sexesId: Yup.number().required("El sexo de la mascota es requerido"),
      colorsId: Yup.number().required("El color de la mascota es requerido"),
      breedsId: Yup.number().required("La raza de la mascota es requerida"),
      customersId: Yup.number().required("El dueño de la mascota es requerido"),
    }),
    onSubmit: (values) => {
      addNewPatient(values).then(() => {
        dispatch(addPatient(values));
        setShowModal(false);
      });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2">
          <div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Nombre</label>
              <input
                type="text"
                name="names"
                onChange={formik.handleChange}
                placeholder="Ingresa el nombre de la mascota"
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
              <label className="text-sm text-gray-400">Raza</label>
              <select
                defaultValue={"DEFAULT"}
                className={
                  "border px-4 py-1 rounded hover:border-green-400 outline-none " +
                  (formik.errors.breedsId && formik.touched.breedsId
                    ? "border-red-400"
                    : "border-gray-300")
                }
                onChange={formik.handleChange}
                name="breedsId"
              >
                <option value="DEFAULT" disabled>
                  selecciona la raza de la mascota
                </option>
                {breeds.map((breed) => (
                  <option key={breed.type} value={breed.id}>
                    {breed.type}
                  </option>
                ))}
              </select>
              {formik.errors.breedsId && formik.touched.breedsId && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.breedsId}
                </span>
              )}
            </div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Sexo</label>
              <select
                defaultValue={"DEFAULT"}
                className={
                  "border px-4 py-1 rounded hover:border-green-400 outline-none " +
                  (formik.errors.sexesId && formik.touched.sexesId
                    ? "border-red-400"
                    : "border-gray-300")
                }
                onChange={formik.handleChange}
                name="sexesId"
              >
                <option value="DEFAULT" disabled>
                  selecciona el sexo de la mascota
                </option>
                {sexes.map((sex) => (
                  <option key={sex.type} value={sex.id}>
                    {sex.type}
                  </option>
                ))}
              </select>
              {formik.errors.sexesId && formik.touched.sexesId && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.sexesId}
                </span>
              )}
            </div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Color</label>
              <select
                defaultValue={"DEFAULT"}
                className={
                  "border px-4 py-1 rounded hover:border-green-400 outline-none " +
                  (formik.errors.colorsId && formik.touched.colorsId
                    ? "border-red-400"
                    : "border-gray-300")
                }
                onChange={formik.handleChange}
                name="colorsId"
              >
                <option value="DEFAULT" disabled>
                  selecciona el color de la mascota
                </option>
                {colors.map((color) => (
                  <option key={color.type} value={color.id}>
                    {color.type}
                  </option>
                ))}
              </select>
              {formik.errors.colorsId && formik.touched.colorsId && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.colorsId}
                </span>
              )}
            </div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Tipo de paciente</label>
              <select
                defaultValue={"DEFAULT"}
                className={
                  "border px-4 py-1 rounded hover:border-green-400 outline-none " +
                  (formik.errors.patientstypeId && formik.touched.patientstypeId
                    ? "border-red-400"
                    : "border-gray-300")
                }
                onChange={formik.handleChange}
                name="patientstypeId"
              >
                <option value="DEFAULT" disabled>
                  selecciona el tipo de paciente
                </option>
                {patTypes.map((patType) => (
                  <option key={patType.type} value={patType.id}>
                    {patType.type}
                  </option>
                ))}
              </select>
              {formik.errors.patientstypeId &&
                formik.touched.patientstypeId && (
                  <span className="text-sm font-normal text-red-400">
                    {formik.errors.patientstypeId}
                  </span>
                )}
            </div>
          </div>
          <div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Dueño</label>
              <select
                defaultValue={"DEFAULT"}
                className={
                  "border px-4 py-1 rounded hover:border-green-400 outline-none " +
                  (formik.errors.customersId && formik.touched.customersId
                    ? "border-red-400"
                    : "border-gray-300")
                }
                onChange={formik.handleChange}
                name="customersId"
              >
                <option value="DEFAULT" disabled>
                  selecciona el dueño de la mascota
                </option>
                {customers.map((custom) => (
                  <option key={custom.id} value={custom.id}>
                    {custom.names} {custom.lastname}
                  </option>
                ))}
              </select>
              {formik.errors.customersId && formik.touched.customersId && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.customersId}
                </span>
              )}
            </div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                name="birthday"
                onChange={formik.handleChange}
                className={
                  "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
                  (formik.errors.birthday && formik.touched.birthday
                    ? "border-red-400"
                    : "border-gray-300")
                }
              />
              {formik.errors.birthday && formik.touched.birthday && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.birthday}
                </span>
              )}
            </div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">
                Edad de la mascota
              </label>
              <input
                type="text"
                name="age"
                onChange={formik.handleChange}
                placeholder="Ingresa la edad de la mascota"
                className={
                  "w-80 border p-1 text-sm rounded outline-none hover:border-green-400 " +
                  (formik.errors.age && formik.touched.age
                    ? "border-red-400"
                    : "border-gray-300")
                }
              />
              {formik.errors.age && formik.touched.age && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.age}
                </span>
              )}
            </div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">
                Estado de la mascota
              </label>
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
                  Selecciona el estado de la mascota
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
          </div>
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
    age: "",
    birthday: "",
    state: "",
    patientstypeId: "",
    sexesId: "",
    colorsId: "",
    breedsId: "",
    customersId: "",
  };
}
