import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({vendors}) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Nombre" />
          <TH name="Nombre de vendedor" />
          <TH name="Telefono" />
          <TH name="Direccion" />
          <TH name="N° de banco" />
          <TH name="Acciones"/>
        </tr>
      </thead>
      <tbody>
        <TableBody vendors={vendors}/>
      </tbody>
    </>
  );
}
