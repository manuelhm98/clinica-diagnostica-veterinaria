import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ pestControlTypes }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Tipo de control de plagas" />
          <TH name="Acciones" />
        </tr>
      </thead>
      <tbody>
        <TableBody pestControlTypes={pestControlTypes} />
      </tbody>
    </>
  );
}
