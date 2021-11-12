import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Table from "../components/Global/Table";
import TD from "../components/Global/TD";
import TH from "../components/Global/TH"
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readOrderServiceDetails } from "../redux/actions/order-service";

export default function OrderServiceDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.orderDetail.data);
  useEffect(() => {
   return dispatch(readOrderServiceDetails(id))
  }, [id,dispatch]);
  console.log(details)
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <div>
          <Title name="Detalles de la orden" />
          <button className="bg-blue-600 text-white mt-3 px-8 ml-4 float-right text-xs py-1 rounded">
            <Link to="/order-service">Atras</Link>
          </button>
        </div>
        <div>
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
                {details && details?.map((det)=>(
                    <tr key={det.id}>
                        <TD name={det.id}/>
                        <TD name={det.hospitalService?.name}/>
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
