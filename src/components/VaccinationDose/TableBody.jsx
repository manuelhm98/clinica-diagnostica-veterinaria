import React from "react";
import TD from "../Global/TD";

export default function TableBody({ vaccinationDoses }) {
  return (
    <>
      {vaccinationDoses.vaccinationDose &&
        vaccinationDoses.vaccinationDose.map((vdosis) => (
          <tr key={vdosis.id}>
            <TD name={vdosis.id} />
            <TD name={vdosis.type} />
            <TD>
              <div className="flex">
                <button className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded">
                  Editar
                </button>
                <button className="bg-red-500 text-white text-xs px-6 m-1 py-1 rounded">
                  Eliminar
                </button>
              </div>
            </TD>
          </tr>
        ))}
    </>
  );
}
