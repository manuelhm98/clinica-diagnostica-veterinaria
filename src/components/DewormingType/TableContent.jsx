import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ dewormingTypes }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Tipo de desparacitacion" />
          <TH name="Marca" />
          <TH name="Acciones" />
        </tr>
      </thead>
      <tbody>
        <TableBody dewormingTypes={dewormingTypes} />
      </tbody>
    </>
  );
}
