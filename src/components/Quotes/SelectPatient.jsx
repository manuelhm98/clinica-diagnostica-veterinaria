import React from "react";
import { showImage } from "../../services/patients";
import InputSearch from "../Global/InputSearch";
import Pagination from "../Global/Pag";
import Table from "../Global/Table";
import TD from "../Global/TD";
import TH from "../Global/TH";
import ShowImage from "../Patients/ShowImage";

export default function SelectPatient({
  patients,
  setPage,
  setSearch,
  setPatientToQuote,
  setShowModalSelectPat,
  search,
}) {
  const setPatient = (pat) => {
    setShowModalSelectPat(false);
    setPatientToQuote(pat);
  };
  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-3 gap-3">
        <InputSearch
          label="Buscar por nombre del paciente"
          placeholder="Escribe el nombre...."
          handleChange={(e) =>
            setSearch({ ...search, name: e.currentTarget.value })
          }
        />
        <InputSearch
          label="Buscar por nombre del dueño"
          placeholder="Escribe el nombre del dueño...."
          handleChange={(e) =>
            setSearch({ ...search, custom: e.currentTarget.value })
          }
        />
        <InputSearch
          label="Buscar por expediente"
          placeholder="Escribe el expediente...."
          handleChange={(e) =>
            setSearch({ ...search, exp: e.currentTarget.value })
          }
        />
      </div>
      <Table>
        <thead>
          <tr>
            <TH name="EXP." />
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
                <TD>
                  <span className="text-red-500 text-xs font-semibold">
                    {pat.exp}
                  </span>
                </TD>
                <TD name={pat.names} />
                <TD name={pat.customers?.names} />
                <TD>
                  <ShowImage cssClass="w-52 rounded" name={pat.img} />
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
      <Pagination
        pageSize={patients?.take}
        currentPage={patients?.currentPage}
        data={patients}
        totalCount={patients?.totalItems}
        last={patients?.totalpages}
        onPageChange={setPage}
      />
    </div>
  );
}
