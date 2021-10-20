import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readShoppings } from "../redux/actions/shopping";
import TH from "../components/Global/TH";
import TD from "../components/Global/TD";
import Pagination from "../components/Global/Pag";

export default function ShoppingHistory() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const shoppings = useSelector((state) => state.shopping.data);
  useEffect(() => {
    return dispatch(readShoppings(page));
  }, [dispatch, page]);
  console.log(shoppings);
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <div>
          <Title name="Historial de compras" />
          <button className="bg-blue-600 text-white mt-3 px-8 ml-4 float-right text-xs py-1 rounded">
            <Link to="/add-shopping-history">Agregar</Link>
          </button>
        </div>
        <div>
          <Table>
            <thead>
              <tr>
                <TH name="Producto" />
                <TH name="Proveedor" />
                <TH name="N° Fiscal" />
                <TH name="Precio de compra" />
                <TH name="Precio de venta" />
                <TH name="Cantidad" />
                <TH name="Total" />
              </tr>
            </thead>
            <tbody>
              {shoppings?.shoppingHistory &&
                shoppings?.shoppingHistory.map((sp) => (
                  <tr key={sp.id}>
                    <TD name={sp.products?.name} />
                    <TD name={sp.vendors?.name} />
                    <TD name={sp.nFiscal} />
                    <TD name={"$" + Number(sp.purchasePrice)} />
                    <TD name={"$" + Number(sp.salePrice)} />
                    <TD name={sp.quantity} />
                    <TD name={"$" + Number(sp.total)} />
                  </tr>
                ))}
            </tbody>
          </Table>
          <Pagination
            last={shoppings?.totalpages}
            className="pagination-bar"
            onPageChange={setPage}
            totalCount={shoppings?.totalItems}
            currentPage={shoppings?.currentPage}
            pageSize={shoppings?.take}
          />
        </div>
      </div>
    </Layout>
  );
}
