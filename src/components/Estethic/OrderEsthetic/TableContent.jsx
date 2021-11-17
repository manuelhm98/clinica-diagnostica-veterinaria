import { lazy, Suspense } from "react";
import TableLoading from "../../Global/TableLoading";
import TH from "../../Global/TH";
const TableBody = lazy(() => import("./TableBody"));

export default function TableContent({ orders }) {
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Fecha" />
          <TH name="Paciente" />
          <TH name="Pago" />
          <TH name="Forma de pago" />
          <TH name="Acciones" />
        </tr>
      </thead>
      <tbody>
        <Suspense fallback={<TableLoading />}>
          <TableBody orders={orders}/>
        </Suspense>
      </tbody>
    </>
  );
}
