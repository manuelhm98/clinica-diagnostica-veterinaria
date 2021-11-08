import { useEffect } from "react";
import { useParams } from "react-router";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { readSaleDetail } from "../redux/actions/sale-history";
import Table from "../components/Global/Table";
import TH from "../components/Global/TH";
import TD from "../components/Global/TD";
import { Link } from "react-router-dom";

export default function Sale() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.saleDetail.data);
  useEffect(() => {
    return dispatch(readSaleDetail(id));
  }, [id, dispatch]);
  console.log(details);
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <div>
          <Title name="Detalles de la venta" />
          <button className="bg-blue-600 text-white mt-3 px-8 ml-4 float-right text-xs py-1 rounded">
            <Link to="/sales-history">Atras</Link>
          </button>
        </div>
        <div>
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
                {details.map((det)=>(
                    <tr key={det.id}>
                        <TD name={det.id}/>
                        <TD name={det.products?.name}/>
                        <TD name={det.quantity} />
                        <TD name={"$" + det.totalUnit} />
                    </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Layout>
  );
}
