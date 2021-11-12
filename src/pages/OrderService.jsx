import { useState, useEffect } from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { readOrderServices } from "../redux/actions/order-service";
import Table from "../components/Global/Table";
import TableContent from "../components/OrderService/TableContent";

export default function OrderService() {
  const dispatch = useDispatch();
  const orderService = useSelector((state) => state.orderService.data);
  const [page, setPage] = useState(1);
  useEffect(() => {
    return dispatch(readOrderServices(page));
  }, [dispatch, page]);
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <div>
          <Title name="Historial de servicios adquiridos" />
          <button className="bg-blue-600 text-white mt-3 px-8 ml-4 float-right text-xs py-1 rounded">
            <Link to="/add-order-service">Agregar</Link>
          </button>
        </div>
        <div>
            <Table>
                <TableContent orderService={orderService}/>
            </Table>
        </div>
      </div>
    </Layout>
  );
}
