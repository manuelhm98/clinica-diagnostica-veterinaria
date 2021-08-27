import React from "react";
import InputSearch from "../Global/InputSearch";
import Pagination from "../Global/Pagination";
import Table from "../Global/Table";
import TD from "../Global/TD";
import TH from "../Global/TH";

export default function SelectDoctor({
  doctors,
  setShowModalSelectDoc,
  setDoctorToQuote,
  setPage,
  setSearch,
}) {
  const setDoctor = (doc) => {
    setShowModalSelectDoc(false);
    setDoctorToQuote(doc);
  };
  return (
    <div className="grid grid-cols-1">
      <div className="">
        <InputSearch
          handleChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Escribe el nombre de doctor para buscar"
          label="Buscar por nombre del doctor"
        />
      </div>
      <Table>
        <thead>
          <tr>
            <TH name="Nombre" />
            <TH name="Direccion" />
            <TH name="Especialidad" />
            <TH name="Acciones" />
          </tr>
        </thead>
        <tbody>
          {doctors.doctor &&
            doctors.doctor.map((doc) => (
              <tr key={doc.id}>
                <TD name={doc.users?.names} />
                <TD name={doc.direction} />
                <TD name={doc.speciality?.type} />
                <TD>
                  <button
                    onClick={() => setDoctor(doc)}
                    className="bg-green-500 text-white rounded text-xs py-2 px-4"
                  >
                    Seleccionar
                  </button>
                </TD>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination data={doctors} method={setPage} />
    </div>
  );
}
