import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ orderService }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Fecha" />
          <TH name="Total" />
          <TH name="Acciones" />
        </tr>
      </thead>
      <tbody>
        <TableBody orderService={orderService} />
      </tbody>
    </>
  );
}
