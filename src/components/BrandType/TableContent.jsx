import React from "react";
import TD from "../Global/TD";
import TH from "../Global/TH";

export default function TableContent() {
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
        <tr>
          <TD name="1" />
          <TD name="Some" />
        </tr>
      </tbody>
    </>
  );
}
