import React from "react";
import TableBody from "./TableBody";
import TH from "../Global/TH";

export default function TableContent({employees,roles,shifts}) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Nombre" />
          <TH name="Apellido" />
          <TH name="Email" />
          <TH name="Acciones" />
        </tr>
      </thead>
      <tbody>
        <TableBody roles={roles} shifts={shifts} employees={employees}/>
      </tbody>
    </>
  );
}
