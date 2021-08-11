import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ breeds }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Nombre" />
          <TH name="Especie" />
          <TH name="Acciones" />
        </tr>
      </thead>
      <tbody>
        <TableBody breeds={breeds} />
      </tbody>
    </>
  );
}
