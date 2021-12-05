import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import Auth from "./Auth";
import { useDispatch, useSelector } from "react-redux";
import { readPatients } from "../../redux/actions/patiences";
import Modal from "../Global/Modal";
import SelectPatient from "../Quotes/SelectPatient";
import { listSpecies } from "../../redux/actions/species";

export default function AuthForm() {
  const [showModalPat, setShowModalPat] = useState(false);
  const [selectPat, setSelectPat] = useState();
  const [tel, setTel] = useState();
  const [custom, setCustom] = useState();
  const [address, setAddress] = useState();
  const [specie, setSpecie] = useState();
  const [turno, setTurno] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patient.data);
  const species = useSelector((state) => state.specie.data);
  const [search, setSearch] = useState({ name: "", custom: "" });
  useEffect(() => {
    dispatch(readPatients(page, search.name, search.custom, "", 3));
    return;
  }, [dispatch, search, page]);
  useEffect(() => {
    dispatch(listSpecies());
    return;
  }, [dispatch]);
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
              className="w-full px-2 rounded border outline-none text-sm"
            />
            <button
              onClick={() => setShowModalPat(true)}
              className="whitespace-nowrap px-4 py-1 text-sm bg-green-500 text-white rounded ml-3"
            >
              Seleccionar paciente
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Turno
              </label>
              <div className="flex">
                <input
                  placeholder="Escribe el turno"
                  className="w-full px-2 py-1 rounded border outline-none text-sm"
                  onChange={(e) => setTurno(e.currentTarget.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Propietario
              </label>
              <div className="flex">
                <input
                  placeholder="Escribe el nombre del propietario"
                  className="w-full px-2 py-1 rounded border outline-none text-sm"
                  onChange={(e) => setCustom(e.currentTarget.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Telefono
              </label>
              <div className="flex">
                <input
                  placeholder="Escribe el telefono del propietario"
                  className="w-full px-2 py-1 rounded border outline-none text-sm"
                  onChange={(e) => setTel(e.currentTarget.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Direccion
              </label>
              <div className="flex">
                <input
                  placeholder="Escribe la direccion del propietario"
                  className="w-full px-2 py-1 rounded border outline-none text-sm"
                  onChange={(e) => setAddress(e.currentTarget.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500">Turno</label>
            <div className="flex">
              <select
                className="w-full px-2 py-1 rounded border outline-none text-sm"
                onChange={(e) => setSpecie(e.currentTarget.value)}
              >
                <option disabled value={"DEFAULT"} selected>
                  Selecciona la especie de la mascota
                </option>
                {species?.specie &&
                  species.specie.map((specie) => (
                    <option key={specie.id} value={specie.type}>
                      {specie.type}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <PDFDownloadLink
        document={
          <Auth
            specie={specie}
            custom={custom}
            address={address}
            tel={tel}
            selectPat={selectPat}
            turno={turno}
          />
        }
        fileName={`Auth-${selectPat?.names}-${selectPat?.exp}.pdf`}
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
    </div>
  );
}
