import { useState, useMemo, useEffect, useCallback } from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Global/Modal";
import SelectPatient from "../components/Quotes/SelectPatient";
import { readPatients } from "../redux/actions/patiences";
import SelectDoctor from "../components/Quotes/SelectDoctor";
import { readDoctors } from "../redux/actions/doctors";
import { returnTime, validateDate } from "../utils/dates";
import { Warning } from "../components/Global/Alerts/Warning";
import { addNewQuote } from "../services/quotes";
import { Success } from "../components/Global/Alerts/Success";
import io from "socket.io-client";
import { useHistory } from "react-router-dom";
import { addQuote } from "../redux/actions/quote";
import { readQuoteTypes } from "../redux/actions/quote-type";

const AddQuote = () => {
  //react useStates login
  const [showModalSelectPat, setShowModalSelectPat] = useState(false);
  const [showModalSelectDoc, setShowModalSelectDoc] = useState(false);
  const [patientToQuote, setPatientToQuote] = useState();
  const [doctorToQuote, setDoctorToQuote] = useState();
  const [search, setSearch] = useState({ name: "", custom: "" });
  const [page, setPage] = useState(1);
  const [online, setOnline] = useState(false);
  //Redux login
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patient.data);
  const doctors = useSelector((state) => state.doctor.data);
  const quoteTypes = useSelector((state) => state.quoteType.data);
  //socket io logic
  const serverURL = "http://137.184.41.16:8000";
  const socket = useMemo(
    () =>
      io.connect(serverURL, {
        transports: ["websocket"],
      }),
    [serverURL]
  );

  useEffect(() => {
    socket.on("connect", () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => setOnline(false));
  }, [socket]);

  const callSocket = useCallback(() => {
    socket.emit("new", "A new order is added");
  }, [socket]);
  //react router dom logic
  const router = useHistory();

  //Formik logic
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object({
      date: yup.date().required("La fecha de la consulta es requerida"),
      issue: yup
        .string()
        .required("Desde escribir la descripcion del problema"),
      quotesTypeId: yup
        .number()
        .required("Debes seleccionar el tipo  de consulta"),
    }),
    onSubmit: (values) => {
      if (validateDate(values.date)) {
        if (patientToQuote) {
          if (doctorToQuote) {
            const newData = {
              ...values,
              date: `${values.date}${returnTime()}`,
              patientsId: patientToQuote?.id,
              doctorsId: doctorToQuote?.id,
            };
            addNewQuote(newData).then(() => {
              callSocket();
              Success("Se guardo el registro");
              dispatch(addQuote(newData));
              router.push("/quotes");
            });
            return;
          }
          Warning("Debes seleccionar un doctor");
          return;
        }
        Warning("Debes seleccionar un paciente");
        return;
      }
      Warning("No puedes seleccionar una fecha anterior");
    },
  });

  //react useEffect logic
  useEffect(() => {
    dispatch(readPatients(page, search.name, search.custom, 3));
    dispatch(readDoctors(1, ""));
    dispatch(readQuoteTypes());
    return;
  }, [dispatch, search, page]);
  return (
    <Layout>
      <div className="p-10">
        <Title name="Agregar nueva consulta" />
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 p-8 shadow w-full">
            <div className="m-4">
              <div className="flex flex-col">
                <label>Fecha de consulta</label>
                <input
                  name="date"
                  onChange={formik.handleChange}
                  type="date"
                  className={
                    "border p-1 text-sm text-gray-500 rounded outline-none hover:border-green-400 " +
                    (formik.errors.date && formik.touched.date
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                />

                {formik.errors.date && formik.touched.date && (
                  <span className="text-xs text-red-400">
                    {formik.errors.date}
                  </span>
                )}
              </div>
              <div className="flex flex-col mt-2">
                <label>Descripcion del problema</label>
                <textarea
                  name="issue"
                  onChange={formik.handleChange}
                  cols={4}
                  rows={7}
                  className={
                    "border p-1 text-sm text-gray-500 rounded outline-none hover:border-green-400 " +
                    (formik.errors.issue && formik.touched.issue
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                  placeholder="Escribe la descripcion del problema"
                />
                {formik.errors.issue && formik.touched.issue && (
                  <span className="text-xs text-red-400">
                    {formik.errors.issue}
                  </span>
                )}
              </div>
              <div className="flex flex-col mt-2">
                <label>Tipo de consulta</label>
                <select
                  defaultValue={"DEFAULT"}
                  className={
                    "border p-1 text-sm text-gray-500 rounded outline-none hover:border-green-400 " +
                    (formik.errors.quotesTypeId && formik.touched.quotesTypeId
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                  onChange={formik.handleChange}
                  name="quotesTypeId"
                >
                  <option value={"DEFAULT"}>
                    Selecciona el tipo de consulta
                  </option>
                  {quoteTypes &&
                    quoteTypes.length &&
                    quoteTypes.map((qtype) => (
                      <option key={qtype.id} value={qtype.id}>
                        {qtype.type}
                      </option>
                    ))}
                </select>
                {formik.errors.quotesTypeId && formik.touched.quotesTypeId && (
                  <span className="text-xs text-red-400">
                    {formik.errors.quotesTypeId}
                  </span>
                )}
              </div>
            </div>
            <div className="m-4">
              <div className="flex flex-col">
                <label>Paciente</label>
                <input
                  disabled
                  defaultValue={patientToQuote && patientToQuote?.names}
                  placeholder="Selecciona el paciente"
                  className="border rounded text-sm py-1 px-2 outline-none mt-2"
                />
                <button
                  type="button"
                  onClick={() => setShowModalSelectPat(true)}
                  className="bg-green-500 font-medium text-white py-2 text-xs rounded mt-4"
                >
                  Seleccionar paciente
                </button>
              </div>
              <div className="flex flex-col mt-8">
                <label>Doctor</label>
                <input
                  defaultValue={doctorToQuote && doctorToQuote.users?.names}
                  disabled
                  placeholder="Selecciona el doctor"
                  className="border rounded text-sm py-1 px-2 outline-none mt-2"
                />
                <button
                  type="button"
                  onClick={() => setShowModalSelectDoc(true)}
                  className="bg-green-500 font-medium text-white py-2 text-xs rounded mt-4"
                >
                  Seleccionar doctor
                </button>
              </div>
              <div className="flex flex-col">
                <button
                  type="submit"
                  className="bg-blue-500 font-medium text-white py-2 text-xs rounded mt-8"
                >
                  Guardar
                </button>
              </div>
            </div>
            <div />
          </div>
        </form>
        <Modal
          showModal={showModalSelectPat}
          setShowModal={setShowModalSelectPat}
          title="Seleccionar paciente"
        >
          <SelectPatient
            setPatientToQuote={setPatientToQuote}
            setPage={setPage}
            setSearch={setSearch}
            search={search}
            patients={patients}
            setShowModalSelectPat={setShowModalSelectPat}
          />
        </Modal>
        <Modal
          showModal={showModalSelectDoc}
          setShowModal={setShowModalSelectDoc}
          title="Seleccionar doctor"
        >
          <SelectDoctor
            setDoctorToQuote={setDoctorToQuote}
            setShowModalSelectDoc={setShowModalSelectDoc}
            doctors={doctors}
          />
        </Modal>
      </div>
    </Layout>
  );
};

export default AddQuote;

function initialValues() {
  return {
    date: "",
    issue: "",
    quotesTypeId: "",
  };
}
