import React from "react";
import { checkRole } from "../../utils/checkRole";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ customers, user }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="Nombres" />
          <TH name="Apellidos" />
          <TH name="N° de celular" />
          <TH name="N° de telefono" />
          <TH name="Estado" />
          {checkRole(user) === 1 && <TH name="Acciones" />}
        </tr>
      </thead>
      <tbody>
        <TableBody user={user} customers={customers} />
      </tbody>
    </>
  );
}
