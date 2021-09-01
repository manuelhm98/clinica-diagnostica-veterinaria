import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({quotes}) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Fecha" />
          <TH name="Paciente" />
          <TH name="Estado" />
        </tr>
      </thead>
      <tbody>
        <TableBody quotes={quotes}/>
      </tbody>
    </>
  );
}
