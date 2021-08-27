import React from "react";
import TD from "../Global/TD";

export default function TableBody({ roles }) {
  return (
    <>
      {roles &&
        roles.map((rol) => (
          <tr key={rol.id}>
            <TD name={rol.id} />
            <TD name={rol.rol} />
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
