import React from "react";
import TD from "../Global/TD";

export default function TableBody({ dewormingTypes }) {
  return (
    <>
      {dewormingTypes.dewormingType &&
        dewormingTypes.dewormingType.map((dwtype) => (
          <tr key={dwtype.id}>
            <TD name={dwtype.id} />
            <TD name={dwtype.type} />
            <TD name={dwtype.brand} />
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
