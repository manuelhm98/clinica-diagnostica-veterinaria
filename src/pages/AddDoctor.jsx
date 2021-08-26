import { useEffect, useState } from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { readSpecialties } from "../redux/actions/specialties";
import Modal from "../components/Global/Modal";
import SelectUser from "../components/Doctors/SelectUser";
import { readEmployees } from "../redux/actions/employee";
import { Info } from "../components/Global/Alerts/Info";
import { addNewDoctor } from "../services/doctor";
import { Success } from "../components/Global/Alerts/Success";
import { addDoctor } from "../redux/actions/doctors";
import { useHistory } from "react-router-dom";

export default function AddDoctor() {
  const [user, setUser] = useState();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const specialties = useSelector((state) => state.specially.data);
  const employees = useSelector((state) => state.employee.data);
  const route = useHistory();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object({
      direction: yup.string().required("La direccion es requerida"),
      cellphone: yup
        .string()
        .matches(phoneRegExp, "Numero de celular invalido")
        .required("El numero de celular es invalido"),
      phone: yup
        .string()
        .matches(phoneRegExp, "Numero de telefono invalido")
        .required("El numero de telefono es invalido"),
      jvpmv: yup.string().required("La junta directiva es requerida"),
      specialityId: yup
        .number()
        .required("Debes seleccionar la especialidad")
        .typeError("Especialidad invalida"),
    }),
    onSubmit: (values) => {
      if (!user) {
        Info("Debes seleccionar un empleado");
        return;
      }
      const doctor = { ...values, usersId: user?.id };
      addNewDoctor(doctor).then(() => {
        Success("Se agrego el doctor");
        dispatch(addDoctor(doctor));
        route.push("/doctors");
      });
    },
  });
  useEffect(() => {
    dispatch(readSpecialties());
    dispatch(readEmployees(1));
    return;
  }, [dispatch]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Agregar nuevo doctor" />
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 m-10 shadow p-8">
            <div className="p-8">
              <div className="flex flex-col">
                <label className="text-sm text-gray-500">Empleado</label>
                <div className="grid grid-cols-2">
                  <input
                    type="text"
                    disabled
                    defaultValue={user && user.names}
                    placeholder="Nombre del empleado"
                    className="rounded border py-1 mt-1 px-2 text-xs text-gray-600"
                  />
                  <input
                    type="text"
                    disabled
                    defaultValue={user && user.lastnames}
                    placeholder="Apellido del empleado"
                    className="rounded border py-1 ml-2 mt-1 px-2 text-xs text-gray-600"
                  />
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  type="button"
                  className="bg-green-500 text-white text-xs py-1 rounded mt-3"
                >
                  Seleccionar
                </button>
                <Modal
                  title="Seleccionar empleado"
                  showModal={showModal}
                  setShowModal={setShowModal}
                >
                  <SelectUser
                    setShowModal={setShowModal}
                    setUser={setUser}
                    employees={employees}
                  />
                </Modal>
              </div>
              <div className="flex flex-col mt-8">
                <label className="text-sm text-gray-500">Especialidad</label>
                <select
                  name="specialityId"
                  onChange={formik.handleChange}
                  defaultValue={"DEFAULT"}
                  className={
                    " border w-full p-1 text-xs text-gray-600 rounded outline-none hover:border-green-400 " +
                    (formik.errors.specialityId && formik.touched.specialityId
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                >
                  <option selected disabled value={"DEFAULT"}>
                    Selecciona la especialidad del doctor
                  </option>
                  {specialties &&
                    specialties.map((spc) => (
                      <option value={spc.id}>{spc.type}</option>
                    ))}
                </select>
                {formik.errors.specialityId && formik.touched.specialityId && (
                  <span className="text-sm font-normal text-red-400">
                    {formik.errors.specialityId}
                  </span>
                )}
              </div>
              <div className="flex flex-col mt-8">
                <label className="text-sm text-gray-500">Junta Directiva</label>
                <input
                  name="jvpmv"
                  onChange={formik.handleChange}
                  placeholder="Escribe la junta directiva"
                  className={
                    " border w-full p-1 text-xs text-gray-600 rounded outline-none hover:border-green-400 " +
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
            </div>
            <div className="p-8">
              <div className="flex flex-col">
                <label className="text-sm text-gray-500">Direccion</label>
                <input
                  name="direction"
                  placeholder="Escribe la direccion del doctor"
                  onChange={formik.handleChange}
                  className={
                    " border w-full p-1 text-xs text-gray-600 rounded outline-none hover:border-green-400 " +
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
              <div className="flex flex-col mt-8">
                <label className="text-sm text-gray-500">Celular</label>
                <input
                  name="cellphone"
                  onChange={formik.handleChange}
                  placeholder="Escribe el numero de celular del doctor"
                  className={
                    " border w-full p-1 text-xs text-gray-600 rounded outline-none hover:border-green-400 " +
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
              <div className="flex flex-col mt-8">
                <label className="text-sm text-gray-500">Telefono</label>
                <input
                  name="phone"
                  onChange={formik.handleChange}
                  placeholder="Escribe el numero de telefono del doctor"
                  className={
                    " border w-full p-1 text-xs text-gray-600 rounded outline-none hover:border-green-400 " +
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
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-full py-1 text-xs text-white rounded mt-4"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

function initialValues() {
  return {
    direction: "",
    cellphone: "",
    phone: "",
    jvpmv: "",
    specialityId: "",
  };
}
