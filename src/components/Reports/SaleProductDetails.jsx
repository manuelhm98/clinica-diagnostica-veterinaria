import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { readSaleDetail } from "../../redux/actions/sale-history";
import Table from "../Global/Table";
import TH from "../Global/TH";
import TD from "../Global/TD";

export default function SaleProductDetails({ sale }) {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.saleDetail.data);
  useEffect(() => {
    return dispatch(readSaleDetail(sale?.id));
  }, [sale, dispatch]);
  return (
    <div className="p-4">
        <Table>
          <thead>
            <tr>
              <TH name="ID" />
              <TH name="Producto" />
              <TH name="Cantidad" />
              <TH name="Total" />
            </tr>
          </thead>
          <tbody>
            {details &&
              details?.map((det) => (
                <tr key={det.id}>
                  <TD name={det.id} />
                  <TD name={det.products?.name} />
                  <TD name={det.quantity} />
                  <TD name={"$" + det.totalUnit} />
                </tr>
              ))}
          </tbody>
        </Table>
    </div>
  );
}
