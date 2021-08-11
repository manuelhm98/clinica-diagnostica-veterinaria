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
