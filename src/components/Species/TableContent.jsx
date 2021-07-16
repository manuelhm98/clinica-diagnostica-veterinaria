import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ species }) {
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
          <TableBody species={species} />
      </tbody>
    </>
  );
}
