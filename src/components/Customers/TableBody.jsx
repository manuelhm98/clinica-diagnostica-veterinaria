import React from "react";
import TD from "../Global/TD";

export default function TableBody({ customers }) {
  return (
    <>
      {customers.length >= 1 ? (
        customers.map((cust) => (
          <tr key={cust.id}>
            <TD name={cust.names} />
            <TD name={cust.lastname} />
            <TD name={cust.cellphone} />
            <TD name={cust.phone} />
            <TD>
              {cust.state === 1 ? <span>Activo</span> : <span>Inactivo</span>}
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
