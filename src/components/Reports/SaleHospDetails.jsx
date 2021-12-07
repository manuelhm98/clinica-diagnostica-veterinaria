import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../Global/Table";
import TD from "../Global/TD";
import TH from "../Global/TH";
import { readOrderServiceDetails } from "../../redux/actions/order-service";

export default function SaleHospDetails({ sale }) {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.orderDetail.data);
  useEffect(() => {
    return dispatch(readOrderServiceDetails(sale?.id));
  }, [sale, dispatch]);
  console.log(details);
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
          {details &&
            details?.map((det) => (
              <tr key={det.id}>
                <TD name={det.id} />
                <TD name={det.hospitalService?.name} />
                <TD name={det.quantity} />
                <TD name={"$" + det.totalUnit} />
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
