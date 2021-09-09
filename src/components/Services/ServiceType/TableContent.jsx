import React from "react";
import { checkRole } from "../../../utils/checkRole";
import TH from "../../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ serviceTypes, user }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Nombre" />
          <TH name="Precio" />
          {checkRole(user) === 1 && <TH name="Acciones" />}
        </tr>
      </thead>
      <tbody>
        <TableBody user={user} serviceTypes={serviceTypes} />
      </tbody>
    </>
  );
}
