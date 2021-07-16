import React from "react";
import TD from "../Global/TD";

export default function TableBody({ patients }) {
  return (
    <>
      {patients.length >= 1 ? (
        patients.map((pat) => (
          <tr key={pat.id}>
            <TD name={pat.names} />
            <TD name={pat.customers?.names} />
            <TD name={pat.sexes?.type} />
            <TD name={pat.colors?.type} />
            <TD>
              {pat.state === 1 ? <span>Activo</span> : <span>Inactivo</span>}
            </TD>
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
        ))
      ) : (
        <tr>
          <td>
            <p className="p-4">No hay registros para mostrar</p>
          </td>
        </tr>
      )}
    </>
  );
}
