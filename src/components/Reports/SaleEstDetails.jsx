import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readEstheticDetails } from "../../redux/actions/estethic-service";
import Table from "../Global/Table";
import TH from "../Global/TH";
import TD from "../Global/TD";

export default function SaleEstDetails({ sale }) {
  const dispatch = useDispatch();
  const esthetic = useSelector((state) => state.estheticDetail.data);
  useEffect(() => {
    return dispatch(readEstheticDetails(sale?.id));
  }, [sale, dispatch]);
  return (
    <div className="p-4">
      <Table>
        <thead>
          <tr>
            <TH name="ID" />
            <TH name="Servicio" />
            <TH name="Cantidad" />
            <TH name="Total" />
          </tr>
        </thead>
        <tbody>
          {esthetic &&
            esthetic?.detailAesthetic?.map((de) => (
              <tr key={de.id}>
                <TD name={de.id} />
                <TD name={de.aestheticService?.name} />
                <TD name={de.quantity} />
                <TD name={"$" + de.totalUnit} />
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
