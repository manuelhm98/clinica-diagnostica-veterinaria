import React from "react";
import TD from "../Global/TD";

export default function TableBody({ specialties }) {
  return (
    <>
      {specialties &&
        specialties.map((spc) => (
          <tr key={spc.id}>
            <TD name={spc.id} />
            <TD name={spc.type} />
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
