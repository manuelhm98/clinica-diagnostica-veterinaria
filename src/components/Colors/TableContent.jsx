import { lazy, Suspense } from "react";
import { checkRole } from "../../utils/checkRole";
import TableLoading from "../Global/TableLoading";
import TH from "../Global/TH";
const TableBody = lazy(() => import("./TableBody"));

export default function TableContent({ colors, user }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Nombre" />
          {checkRole(user) === 1 && <TH name="Acciones" />}
        </tr>
      </thead>
      <tbody>
        <Suspense fallback={<TableLoading />}>
          <TableBody user={user} colors={colors} />
        </Suspense>
      </tbody>
    </>
  );
}
