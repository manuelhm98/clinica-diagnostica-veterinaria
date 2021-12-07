import { useEffect } from "react";
import { useParams } from "react-router";
import Layout from "../layout/Layout";
import Title from "../components/Global/Title";
import { useDispatch, useSelector } from "react-redux";
import { readEstheticDetails } from "../redux/actions/estethic-service";
import { Link } from "react-router-dom";
import Table from "../components/Global/Table";
import TH from "../components/Global/TH";
import TD from "../components/Global/TD";

export default function EstheticDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const esthetic = useSelector((state) => state.estheticDetail.data);
  useEffect(() => {
    return dispatch(readEstheticDetails(id));
  }, [id, dispatch]);
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <div>
          <Title name="Detalles del servicio estetico" />
          <button className="bg-blue-600 text-white mt-3 px-8 ml-4 float-right text-xs py-1 rounded">
            <Link to="/history-esthetic">Atras</Link>
          </button>
        </div>
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
                  <TD name={"$"+de.totalUnit} />
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Layout>
  );
}
