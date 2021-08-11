import React from "react";
import TD from "../Global/TD";

export default function TableBody({ sexes }) {
  return (
    <>
      {sexes.length >= 1 ? (
        sexes.map((sex) => (
          <tr key={sex.type}>
            <TD name={sex.id} />
            <TD name={sex.type} />
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
