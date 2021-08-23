import React from "react";
import TD from "../Global/TD";

export default function TableBody({ employees }) {
  return (
    <>
      {employees?.users &&
        employees?.users.map((emp) => (
          <tr key={emp.id}>
            <TD name={emp.id} />
            <TD name={emp.names} />
            <TD name={emp.lastnames} />
            <TD name={emp.email} />
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
