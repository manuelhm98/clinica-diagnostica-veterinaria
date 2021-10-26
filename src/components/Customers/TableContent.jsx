import { lazy, Suspense } from "react";
import { checkRole } from "../../utils/checkRole";
import TableLoading from "../Global/TableLoading";
import TH from "../Global/TH";
const TableBody = lazy(() => import("./TableBody"));

export default function TableContent({ customers, user, setState }) {
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
        <Suspense fallback={<TableLoading />}>
          <TableBody setState={setState} user={user} customers={customers} />
        </Suspense>
      </tbody>
    </>
  );
}
