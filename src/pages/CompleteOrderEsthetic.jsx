import { useState, useEffect } from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import SelectPatient from "../components/Quotes/SelectPatient";
import Modal from "../components/Global/Modal";
import { readPatients } from "../redux/actions/patiences";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { Warning } from "../components/Global/Alerts/Warning";
import { clearEsthetic, getEsthetic } from "../utils/esthetic";
import { saveEstheticOrder } from "../services/estethic";
import { Success } from "../components/Global/Alerts/Success";

export default function CompleteOrderEsthetic() {
  const [patientToQuote, setPatientToQuote] = useState();
  const [search, setSearch] = useState({ name: "", custom: "" });
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patient.data);
  const [transport, setTransport] = useState(false);
  const [wayToPay, setWayToPay] = useState();
  useEffect(() => {
    return dispatch(readPatients(page, search.name, search.custom, "", 3));
  }, [dispatch, search, page]);
  const formik = useFormik({
    initialValues: {
      transport: 0,
      pay: false,
      cage: false,
      consultation: false,
      description: "",
      price: 0,
    },
    validationSchema: yup.object({
      description: yup.string().required("La descripcion es requerida"),
    }),
    onSubmit: (values) => {
      if (patientToQuote) {
        const aesthetic = getEsthetic();
        const newData = {
          transport: Number(values.transport),
          price: Number(values.price),
          pay: values.pay,
          cage: values.cage,
          consultation: values.consultation,
          wayToPay: wayToPay,
          description: values.description,
          patientsId: patientToQuote?.id,
          aesthetic,
        };
        saveEstheticOrder(newData).then(() => {
          Success("Se completo la orden");
          clearEsthetic();
          window.location.href = "/history-esthetic";
        });
        return;
      }
      Warning("Debes seleccionar el paciente");
    },
  });
  return (
    <Layout>
      <div className="p-8">
        <Title name="Completa la orden" />
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full rounded p-8 border shadow">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-500">
                  Paciente
                </label>
                <div className="flex flex-row w-full">
                  <input
                    disabled
                    defaultValue={patientToQuote && patientToQuote?.names}
                    placeholder="Selecciona el paciente"
                    className="border rounded w-full mr-4 text-sm py-1 px-2 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="bg-green-500 font-medium whitespace-nowrap text-white py-1 px-4 text-xs rounded mt-1"
                  >
                    Seleccionar paciente
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-500">
                  Forma de pago
                </label>
                <select
                  name="wayToPay"
                  onChange={(e) => setWayToPay(e.currentTarget.value)}
                  defaultValue={"DEFAULT"}
                  className={
                    "border p-1 text-sm text-gray-500 rounded outline-none hover:border-green-400 "
                  }
                >
                  <option selected value={"DEFAULT"} disabled>
                    Selecciona el metodo de pago
                  </option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="Efectivo">Efectivo</option>
                  <option value="Tarjeta de credito">Tarjeta de credito</option>
                  <option value="Donacion">Donacion</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-500">
                Descripcion
              </label>
              <textarea
                name="description"
                onChange={formik.handleChange}
                cols={3}
                rows={4}
                className={
                  "border p-1 text-sm text-gray-500 rounded outline-none hover:border-green-400 " +
                  (formik.errors.description && formik.touched.description
                    ? "border-red-400"
                    : "border-gray-300")
                }
                placeholder="Escribe la descripcion del servicio estetico"
              />
              {formik.errors.description && formik.touched.description && (
                <span className="text-xs text-red-400">
                  {formik.errors.description}
                </span>
              )}
            </div>
            <div className={transport ? " flex flex-col" : "hidden"}>
              <label className="text-xs font-semibold text-gray-500">
                Precio de transporte
              </label>
              <input
                name="transport"
                onChange={formik.handleChange}
                className={
                  "border p-1 text-sm text-gray-500 rounded outline-none hover:border-green-400 "
                }
                placeholder="Escribe el total a cobrar por el transporte"
              />
            </div>
            <div
              className={wayToPay === "Donacion" ? " flex flex-col" : "hidden"}
            >
              <label className="text-xs font-semibold text-gray-500">
                Precio de donacion
              </label>
              <input
                name="price"
                onChange={formik.handleChange}
                className={
                  "border p-1 text-sm text-gray-500 rounded outline-none hover:border-green-400 "
                }
                placeholder="Escribe el precio total de la donacion"
              />
            </div>
            <div className="flex items-start mb-6 mt-6">
              <div className="flex items-center h-5">
                <input
                  name="transport"
                  onChange={() => setTransport(!transport)}
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>

              <div class="text-sm ml-3">
                <label
                  htmlFor="remember"
                  className="font-medium text-sm text-gray-900"
                >
                  Adquirio transporte
                </label>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="pay"
                  onChange={formik.handleChange}
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>
              <div class="text-sm ml-3">
                <label
                  htmlFor="remember"
                  className="font-medium text-sm text-gray-900"
                >
                  Se ah realizado el pago
                </label>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  name="consultation"
                  onChange={formik.handleChange}
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>
              <div class="text-sm ml-3">
                <label
                  htmlFor="remember"
                  className="font-medium text-sm text-gray-900"
                >
                  Adquirio una consulta
                </label>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  name="cage"
                  type="checkbox"
                  onChange={formik.handleChange}
                  checked={formik.values.cage}
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>
              <div class="text-sm ml-3">
                <label
                  htmlFor="remember"
                  className="font-medium text-sm text-gray-900"
                >
                  Requirio jaula
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-16 py-1"
            >
              Completar
            </button>
          </div>
        </form>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Selecciona el paciente"
      >
        <SelectPatient
          setPatientToQuote={setPatientToQuote}
          setPage={setPage}
          setSearch={setSearch}
          search={search}
          patients={patients}
          setShowModalSelectPat={setShowModal}
        />
      </Modal>
    </Layout>
  );
}
