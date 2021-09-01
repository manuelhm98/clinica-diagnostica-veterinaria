import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({patients,setReload}) {
  return (
    <>
      <thead>
        <tr>
        <TH name="N° de exp." />
          <TH name="Nombre" />
          <TH name="Dueño" />
          <TH name="Foto" />
          <TH name="Estado" />
          <TH name="Acciones"/>
        </tr>
      </thead>
      <tbody>
          <TableBody patients={patients} setReload={setReload} />
      </tbody>
    </>
  );
}
