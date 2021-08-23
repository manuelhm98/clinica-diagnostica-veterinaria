import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ clinicalServices }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Paciente" />
          <TH name="Servicio" />
        </tr>
      </thead>
      <tbody>
        <TableBody clinicalServices={clinicalServices} />
      </tbody>
    </>
  );
}
