import { useState, useEffect } from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useFormik } from "formik";
import * as yup from "yup";
import Modal from "../components/Global/Modal";
import SelectPatient from "../components/Quotes/SelectPatient";
import SelectDoctor from "../components/Quotes/SelectDoctor";
import { useDispatch, useSelector } from "react-redux";
import { readPatients } from "../redux/actions/patiences";
import { readDoctors } from "../redux/actions/doctors";
import { Warning } from "../components/Global/Alerts/Warning";
import { readServiceType } from "../redux/actions/service-type";
import { addNewClinicalService } from "../services/clinical-service";
import { addClinicalService } from "../redux/actions/clinical-service";
import {Success} from "../components/Global/Alerts/Success"
import { useHistory } from "react-router";

export default function AddClinicalService() {
  const [page, setPage] = useState(1);
  const [pageDoc, setPageDoc] = useState(1);
  const [showModal, setshowModal] = useState(false);
  const [showModalDoc, setshowModalDoc] = useState(false);
  const [patientToClinical, setpatientToClinical] = useState();
  const [doctorToClinical, setDoctorToClinical] = useState();
  const [search, setSearch] = useState({ name: "", custom: "" });
  const [searchDoc, setSearchDoc] = useState("");
  const router = useHistory()
  const formik = useFormik({
    initialValues: {
      observations: "",
      clinicalServicesTypeId: "",
    },
    validationSchema: yup.object({
      observations: yup.string().required("La observacion es requerida"),
      clinicalServicesTypeId: yup
        .number()
        .required("Debes seleccionar el tipo de servicio clinico"),
    }),
    onSubmit: (values) => {
      if (patientToClinical) {
        if (doctorToClinical) {
          const newData = {
            ...values,
            patientsId: patientToClinical?.id,
            doctorsId: doctorToClinical?.id,
          };
          addNewClinicalService(newData).then(()=>{
            dispatch(addClinicalService(newData));
            Success("Se agrego el servicio clinico")
            router.push("/clinical-service")
          })
          return;
        }
        Warning("Debes selecciona un doctor");
        return;
      }
      Warning("Debes selecciona un paciente");
      return;
    },
  });
  const patients = useSelector((state) => state.patient.data);
  const doctors = useSelector((state) => state.doctor.data);
  const serviceTypes = useSelector((state) => state.serviceType.data);
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(readPatients(page, search.name, search.custom, 3));
  }, [dispatch, page, search]);

  useEffect(() => {
    return dispatch(readDoctors(pageDoc, searchDoc));
  }, [dispatch, pageDoc, searchDoc]);

  useEffect(() => {
    return dispatch(readServiceType());
  }, [dispatch]);

  return (
    <Layout>
      <div className="p-8">
        <Title name="Agregar nuevo servicio clinico" />
        <div className="border w-full h-full mt-14">
          <form onSubmit={formik.handleSubmit} className="p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex flex-col">
                  <label className="text-gray-500">Observacion</label>
                  <textarea
                    name="observations"
                    onChange={formik.handleChange}
                    className={
                      "border rounded shadow px-3 py-1 mt-2 text-gray-500 outline-none " +
                      (formik.errors.observations && formik.touched.observations
                        ? "border-red-400"
                        : "border")
                    }
                    placeholder="Escribe la observacion..."
                    cols={6}
                    rows={8}
                  />
                  {formik.errors.observations &&
                    formik.touched.observations && (
                      <span className="text-xs text-red-400">
                        {formik.errors.observations}
                      </span>
                    )}
                </div>
                <div className="flex flex-col mt-3">
                  <label className="text-gray-500">Tipo de servicio</label>
                  <select
                    name="clinicalServicesTypeId"
                    onChange={formik.handleChange}
                    defaultValue={"DEFAULT"}
                    className={
                      "border rounded shadow px-3 py-1 mt-2 text-gray-500 outline-none " +
                      (formik.errors.clinicalServicesTypeId &&
                      formik.touched.clinicalServicesTypeId
                        ? "border-red-400"
                        : "border")
                    }
                  >
                    <option disabled value={"DEFAULT"}>
                      Selecciona un tipo de servicio
                    </option>
                    {serviceTypes?.clinicalStype &&
                      serviceTypes?.clinicalStype.map((stype) => (
                        <option key={stype.id} value={stype.id}>
                          {stype.type} - ${stype.price}
                        </option>
                      ))}
                  </select>
                  {formik.errors.clinicalServicesTypeId &&
                    formik.touched.clinicalServicesTypeId && (
                      <span className="text-xs text-red-400">
                        {formik.errors.clinicalServicesTypeId}
                      </span>
                    )}
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <label className="text-gray-500">Paciente</label>
                  <input
                    className="border rounded shadow px-3 py-1 mt-2 text-gray-500 outline-none"
                    placeholder="Selecciona el paciente"
                    defaultValue={patientToClinical && patientToClinical.names}
                    disabled
                  />
                  <button
                    onClick={() => setshowModal(true)}
                    type="button"
                    className="bg-green-400 text-white rounded mt-2 text-xs py-2"
                  >
                    Seleccionar paciente
                  </button>
                </div>
                <div className="flex flex-col mt-5">
                  <label className="text-gray-500">Doctor</label>
                  <input
                    className="border rounded shadow px-3 py-1 mt-2 text-gray-500 outline-none"
                    placeholder="Escribe la observacion..."
                    disabled
                    defaultValue={
                      doctorToClinical && doctorToClinical.users?.names
                    }
                  />
                  <button
                    onClick={() => setshowModalDoc(true)}
                    type="button"
                    className="bg-green-400 text-white rounded mt-2 text-xs py-2"
                  >
                    Seleccionar paciente
                  </button>
                  <Modal
                    showModal={showModal}
                    setShowModal={setshowModal}
                    title="Seleccionar un nuevo paciente"
                  >
                    <SelectPatient
                      search={search}
                      patients={patients}
                      setPage={setPage}
                      setSearch={setSearch}
                      setPatientToQuote={setpatientToClinical}
                      setShowModalSelectPat={setshowModal}
                    />
                  </Modal>
                  <Modal
                    showModal={showModalDoc}
                    setShowModal={setshowModalDoc}
                    title="Selecciona un nuevo doctor"
                  >
                    <SelectDoctor
                      doctors={doctors}
                      setPage={setPageDoc}
                      setSearch={setSearchDoc}
                      setShowModalSelectDoc={setshowModalDoc}
                      setDoctorToQuote={setDoctorToClinical}
                    />
                  </Modal>
                </div>
                <div className="flex flex-col mt-6">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded mt-4 text-xs py-2"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
