import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({patients}) {
  return (
    <>
      <thead>
        <tr>
          <TH name="Nombre" />
          <TH name="Dueño" />
          <TH name="Sexo"/>
          <TH name="Color" />
          <TH name="Estado" />
          <TH name="Acciones"/>
        </tr>
      </thead>
      <tbody>
          <TableBody patients={patients} />
      </tbody>
    </>
  );
}
