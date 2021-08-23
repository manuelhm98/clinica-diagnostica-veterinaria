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
            
          </tr>
        ))}
    </>
  );
}
