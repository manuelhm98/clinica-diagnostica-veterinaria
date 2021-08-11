import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ colors}) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Nombre" />
          <TH name="Acciones" />
        </tr>
      </thead>
      <tbody>
        <TableBody
          colors={colors}
        />
      </tbody>
    </>
  );
}
