import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Responsability from "../Certifications/Responsability";
import { useDispatch, useSelector } from "react-redux";
import { readPatients } from "../../redux/actions/patiences";
import Modal from "../Global/Modal";
import SelectPatient from "../Quotes/SelectPatient";

export default function ResponsabilityForm() {
  const [showModalPat, setShowModalPat] = useState(false);
  const [selectPat, setSelectPat] = useState();
  const [search, setSearch] = useState({ name: "", custom: "" });
  const [page, setPage] = useState(1);
  const [contry, setContry] = useState();
  const [custom, setCustom] = useState();
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patient.data);
  useEffect(() => {
    dispatch(readPatients(page, search.name, search.custom, "", 3));
    return;
  }, [dispatch, search, page]);
  return (
    <div>
      <div className="mb-20">
        <label className="text-sm">Paciente</label>
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
      <PDFDownloadLink
        document={<Responsability patient={selectPat && selectPat} />}
        fileName={`CR-${selectPat?.names}-${selectPat?.exp}.pdf`}
        style={{
          marginTop: 50,
          textDecoration: "none",
          padding: "5px",
          fontWeight: 500,
          borderRadius: 10,
          color: "#fff",
          backgroundColor: "#00b9ae",
          fontSize: 12,
          paddingLeft: "20px",
          paddingRight: "20px",
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
    </div>
  );
}
