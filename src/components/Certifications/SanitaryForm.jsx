import { useState, useEffect } from "react";
import Modal from "../Global/Modal";
import SelectPatient from "../Quotes/SelectPatient";
import { useDispatch, useSelector } from "react-redux";
import { readPatients } from "../../redux/actions/patiences";
import { readDoctors } from "../../redux/actions/doctors";
import SelectDoctor from "../Quotes/SelectDoctor";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Sanitary from "./Sanitary";

export default function SanitaryForm() {
  const [showModalPat, setShowModalPat] = useState(false);
  const [selectPat, setSelectPat] = useState();
  const [showModalDoctor, setShowModalDoctor] = useState(false);
  const [selectDoctor, setSelectDoctor] = useState();
  const [search, setSearch] = useState({ name: "", custom: "", exp: "" });
  const [page, setPage] = useState(1);
  const [pageDoc, setPageDoc] = useState(1);
  const [searchDoc, setSearchDoc] = useState("");
  const [contry, setContry] = useState();
  const [custom, setCustom] = useState();
  const [date, setDate] = useState();
  const [specie, setSpecie] = useState();
  const patients = useSelector((state) => state.patient.data);
  const doctors = useSelector((state) => state.doctor.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readPatients(page, search.name, search.custom, search.exp, 3, 1));
    return;
  }, [dispatch, search, page]);
  useEffect(() => {
    dispatch(readDoctors(pageDoc, ""));
    return;
  }, [dispatch, searchDoc, pageDoc]);

  return (
    <div>
      <div className="mb-10">
        <div>
          <label className="text-xs font-semibold text-gray-500">
            Paciente
          </label>
          <div className="flex">
            <input
              readOnly
              defaultValue={selectPat && selectPat?.names}
              placeholder="Selecciona el paciente"
              className="w-full px-2 rounded border outline-none"
            />
            <button
              onClick={() => setShowModalPat(true)}
              className="whitespace-nowrap px-4 py-1 bg-green-500 text-white rounded ml-3"
            >
              Seleccionar paciente
            </button>
          </div>
        </div>
        <div className="">
          <label className="text-xs font-semibold text-gray-500">Doctor</label>
          <div className="flex">
            <input
              className="w-full rounded border px-2 outline-none"
              readOnly
              placeholder="Selecciona el doctor"
              defaultValue={
                selectDoctor &&
                selectDoctor?.users.names + " " + selectDoctor?.users.lastnames
              }
            />
            <button
              onClick={() => setShowModalDoctor(true)}
              className="whitespace-nowrap px-4 py-1 bg-green-500 text-white rounded ml-3"
            >
              Seleccionar Doctor
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-semibold text-gray-500">
              Pais de viaje
            </label>
            <div className="flex">
              <input
                placeholder="Escribe el pais de viaje"
                onChange={(e) => setContry(e.currentTarget.value)}
                className="w-full rounded border outline-none px-2"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500">Dueño</label>
            <div className="flex">
              <input
                placeholder="Escribe el nombre del dueño de la mascota"
                onChange={(e) => setCustom(e.currentTarget.value)}
                className="w-full rounded border outline-none px-2"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-semibold text-gray-500">
              Especie
            </label>
            <div className="flex">
              <input
                placeholder="Escribe la especie de la mascota"
                onChange={(e) => setSpecie(e.currentTarget.value)}
                className="w-full rounded border outline-none px-2"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500">Fecha</label>
            <div className="flex">
              <input
                placeholder="Escribe la fecha"
                onChange={(e) => setDate(e.currentTarget.value)}
                className="w-full rounded border outline-none px-2 text-sm py-1"
              />
            </div>
          </div>
        </div>
      </div>
      <PDFDownloadLink
        document={
          <Sanitary
            custom={custom}
            selectDoctor={selectDoctor}
            country={contry}
            specie={specie}
            date={date}
            selectPat={selectPat}
          />
        }
        fileName={`CS-${selectPat?.names}-${selectPat?.exp}.pdf`}
        style={{
          textDecoration: "none",
          padding: "5px",
          fontWeight: 400,
          borderRadius: 5,
          color: "#fff",
          backgroundColor: "#3b82f6",
          fontSize: 12,
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        {() => "Descargar Pdf"}
      </PDFDownloadLink>
      <Modal
        showModal={showModalPat}
        setShowModal={setShowModalPat}
        title="Seleccionar paciente"
      >
        <SelectPatient
          setPatientToQuote={setSelectPat}
          setPage={setPage}
          setSearch={setSearch}
          search={search}
          patients={patients}
          setShowModalSelectPat={setShowModalPat}
        />
      </Modal>
      <Modal
        showModal={showModalDoctor}
        setShowModal={setShowModalDoctor}
        title="Seleccionar doctor"
      >
        <SelectDoctor
          setDoctorToQuote={setSelectDoctor}
          setShowModalSelectDoc={setShowModalDoctor}
          doctors={doctors}
          setSearch={setSearchDoc}
          setPage={setPageDoc}
        />
      </Modal>
    </div>
  );
}
