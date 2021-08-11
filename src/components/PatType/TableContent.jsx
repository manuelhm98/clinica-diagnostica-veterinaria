import React from "react";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({patTypes}) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Nombre" />
        </tr>
      </thead>
      <tbody>
          <TableBody patTypes={patTypes} />
      </tbody>
    </>
  );
}
