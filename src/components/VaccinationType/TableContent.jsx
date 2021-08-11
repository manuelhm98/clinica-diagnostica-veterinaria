import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ vaccinationTypes }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Tipo de vacunacion" />
          <TH name="Acciones" />
        </tr>
      </thead>
      <tbody>
        <TableBody vaccinationTypes={vaccinationTypes} />
      </tbody>
    </>
  );
}
