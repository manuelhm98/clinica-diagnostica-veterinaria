import { useState, useEffect } from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import Table from "../components/Global/Table";
import { useDispatch, useSelector } from "react-redux";
import TableContent from "../components/Estethic/OrderEsthetic/TableContent";
import { readEstethicServicesOrders } from "../redux/actions/estethic-service";
import { Link } from "react-router-dom";
import Pagination from "../components/Global/Pag";

export default function EstheticOrder() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.estheticOrder.data);
  useEffect(() => {
    return dispatch(readEstethicServicesOrders(page));
  }, [dispatch, page]);
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <div>
          <Title name="Historial de servicios esteticos" />
          <Link to="/add-esthetic-service">
            <button className="bg-blue-600 text-white mt-3 px-8 ml-4 float-right text-xs py-1 rounded">
              Agregar
            </button>
          </Link>
        </div>
        <Table>
          <TableContent orders={orders && orders?.ordenAesthetic} />
        </Table>
        <Pagination
          last={orders?.totalpages}
          className="pagination-bar"
          onPageChange={setPage}
          totalCount={orders?.totalItems}
          currentPage={orders?.currentPage}
          pageSize={orders?.take}
        />
      </div>
    </Layout>
  );
}
