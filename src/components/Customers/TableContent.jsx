import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({customers}) {
  return (
    <>
      <thead>
        <tr>
          <TH name="Nombres" />
          <TH name="Apellidos" />
          <TH name="N° de celular" />
          <TH name="N° de telefono" />
          <TH name="Estado" />
          <TH name="Acciones" />
        </tr>
      </thead>
      <tbody>
          <TableBody customers={customers} />
      </tbody>
    </>
  );
}
