import React from "react";
import { checkRole } from "../../utils/checkRole";
import TH from "../Global/TH";
import TableBody from "./TableBody";

export default function TableContent({ patients, setReload, user }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="N° de exp." />
          <TH name="Nombre" />
          <TH name="Dueño" />
          <TH name="Foto" />
          <TH name="Estado" />
          {checkRole(user) === 1 && <TH name="Acciones" />}
        </tr>
      </thead>
      <tbody>
        <TableBody user={user} patients={patients} setReload={setReload} />
      </tbody>
    </>
  );
}
