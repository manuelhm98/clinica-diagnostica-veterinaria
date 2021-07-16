import React from "react";
import TD from "../Global/TD";

export default function TableBody({ patTypes }) {
  return (
    <>
      {patTypes.length >= 1 ? (
        patTypes.map((patType) => (
          <tr key={patType.type}>
            <TD name={patType.id} />
            <TD name={patType.type} />
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
