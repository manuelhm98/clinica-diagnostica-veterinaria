import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { readSales } from "../redux/actions/sale-history";
import TableContent from "../components/SalesHistory/TableContent";
import Pagination from "../components/Global/Pag";

export default function SalesHistory() {
  const salesHistory = useSelector((state) => state.sale.data);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    return dispatch(readSales(page));
  }, [page, dispatch]);
  console.log(salesHistory);
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <div>
          <Title name="Historial de compras" />
          <button className="bg-blue-600 text-white mt-3 px-8 ml-4 float-right text-xs py-1 rounded">
            <Link to="/product">Agregar</Link>
          </button>
        </div>
        <div>
          <Table>
            <TableContent sales={salesHistory?.sales} />
          </Table>
          <Pagination
            last={salesHistory?.totalpages}
            className="pagination-bar"
            onPageChange={setPage}
            totalCount={salesHistory?.totalItems}
            currentPage={salesHistory?.currentPage}
            pageSize={salesHistory?.take}
          />
        </div>
      </div>
    </Layout>
  );
}
