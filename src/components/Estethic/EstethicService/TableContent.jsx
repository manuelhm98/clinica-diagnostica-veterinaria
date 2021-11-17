import { lazy, Suspense } from "react";
import TableLoading from "../../Global/TableLoading";
import TH from "../../Global/TH";
const TableBody = lazy(() => import("./TableBody"));

export default function TableContent({ estethic }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Nombre" />
          <TH name="Precio" />
          <TH name="Tamaño" />
          <TH name="Acciones" />
        </tr>
      </thead>
      <tbody>
        <Suspense fallback={<TableLoading />}>
          <TableBody estethic={estethic.aestheticService} />
        </Suspense>
      </tbody>
    </>
  );
}
