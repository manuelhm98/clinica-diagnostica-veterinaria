import { lazy, Suspense } from "react";
import { checkRole } from "../../utils/checkRole";
import TableLoading from "../Global/TableLoading";
import TH from "../Global/TH";
const TableBody = lazy(() => import("./TableBody"));

export default function TableContent({ patients, setReload, user, setState }) {
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
        <Suspense fallback={<TableLoading />}>
          <TableBody
            user={user}
            setState={setState}
            patients={patients}
            setReload={setReload}
          />
        </Suspense>
      </tbody>
    </>
  );
}
