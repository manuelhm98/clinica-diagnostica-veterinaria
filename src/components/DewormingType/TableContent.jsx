import React from "react";
import { checkRole } from "../../utils/checkRole";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ dewormingTypes, user }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Tipo de desparacitacion" />
          <TH name="Marca" />
          {checkRole(user) === 1 && <TH name="Acciones" />}
        </tr>
      </thead>
      <tbody>
        <TableBody user={user} dewormingTypes={dewormingTypes} />
      </tbody>
    </>
  );
}
