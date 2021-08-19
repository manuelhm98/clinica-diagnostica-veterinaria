import React from "react";
import Table from "../Global/Table";
import TD from "../Global/TD";
import TH from "../Global/TH";

export default function SelectDoctor({
  doctors,
  setShowModalSelectDoc,
  setDoctorToQuote,
}) {
  console.log(doctors)
  const setDoctor = (doc) => {
    setShowModalSelectDoc(false);
    setDoctorToQuote(doc);
  };
  return (
    <div className="grid grid-cols-1">
      <div className="">
        <input
          className="border rounded w-full px-2 py-1 text-xs outline-none"
          placeholder="Escribe para buscar un paciente"
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
    </div>
  );
}
