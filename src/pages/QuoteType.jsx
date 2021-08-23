import { useEffect, useState } from "react";
import Form from "../components/Quotes/QuoteType/Form";
import Layout from "../layout/Layout";
import Modal from "../components/Global/Modal";
import Title from "../components/Global/Title";
import Table from "../components/Global/Table";
import TH from "../components/Global/TH";
import TD from "../components/Global/TD";
import { useSelector, useDispatch } from "react-redux";
import { readQuoteTypes } from "../redux/actions/quote-type";

export default function QuoteType() {
  const [showModal, setShowModal] = useState(false);
  const quoteTypes = useSelector((state) => state.quoteType.data);
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(readQuoteTypes());
  }, [dispatch]);
  console.log(quoteTypes);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de Tipos de consulta" />
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-8 py-1 rounded"
          >
            Agregar
          </button>
        </div>
        <Table>
          <thead>
            <tr>
              <TH name="ID" />
              <TH name="Nombre" />
            </tr>
          </thead>
          <tbody>
            {quoteTypes &&
              quoteTypes.length &&
              quoteTypes.map((qtype) => (
                <tr key={qtype.id}>
                  <TD name={qtype.id} />
                  <TD name={qtype.type} />
                </tr>
              ))}
          </tbody>
        </Table>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title="Agregar nuevo tipo de consulta"
        >
          <Form setShowModal={setShowModal} />
        </Modal>
      </div>
    </Layout>
  );
}
