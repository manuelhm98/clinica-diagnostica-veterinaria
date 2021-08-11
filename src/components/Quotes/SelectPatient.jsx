import React from "react";
import { showImage } from "../../services/patients";
import Pagination from "../Global/Pagination";
import Table from "../Global/Table";
import TD from "../Global/TD";
import TH from "../Global/TH";

export default function SelectPatient({
  patients,
  setPage,
  setSearch,
  setPatientToQuote,
  setShowModalSelectPat,
}) {
  const setPatient = (pat) => {
    setShowModalSelectPat(false);
    setPatientToQuote(pat);
  };
  console.log(patients);
  return (
    <div className="grid grid-cols-1">
      <div className="">
        <input
          onChange={(e) => setSearch(e.currentTarget.value)}
          className="border rounded w-full px-2 py-1 text-xs outline-none"
          placeholder="Escribe para buscar un paciente"
        />
      </div>
      <Table>
        <thead>
          <tr>
            <TH name="Nombre" />
            <TH name="Dueño" />
            <TH name="Foto" />
            <TH name="Acciones" />
          </tr>
        </thead>
        <tbody>
          {patients.patients &&
            patients.patients.map((pat) => (
              <tr key={pat.id}>
                <TD name={pat.names} />
                <TD name={pat.customers?.names} />
                <TD>
                  <img
                    className="w-72 rounded"
                    src={showImage(pat.img)}
                    alt="null"
                  />
                </TD>
                <TD>
                  <button
                    onClick={() => setPatient(pat)}
                    className="bg-green-500 text-white rounded text-xs py-2 px-4"
                  >
                    Seleccionar
                  </button>
                </TD>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination method={setPage} data={patients} />
    </div>
  );
}
