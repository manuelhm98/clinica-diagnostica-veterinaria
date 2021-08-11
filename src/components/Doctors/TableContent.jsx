import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ doctors }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="Usuario" />
          <TH name="JVMVP" />
          <TH name="N° de celular" />
          <TH name="N° de telefono" />
          <TH name="Acciones" />
        </tr>
      </thead>
      <tbody>
        <TableBody doctors={doctors} />
      </tbody>
    </>
  );
}
