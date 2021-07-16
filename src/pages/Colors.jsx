import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Colors/Form";
import TableContent from "../components/Colors/TableContent";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readColors } from "../redux/actions/colors";

export default function Colors() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.color.data);
  useEffect(() => {
    return dispatch(readColors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de colores" />
        <div>
          <input
            className="border w-96 px-4 rounded"
            placeholder="Escribe para buscar"
          ></input>
          <button className="bg-green-500 text-white text-xs py-1 px-8 ml-4 rounded">
            Buscar
          </button>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <Modal
          title="Agregar Color"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <Form setShowModal={setShowModal} />
        </Modal>
        <Table>
          <TableContent colors={colors} />
        </Table>
      </div>
    </Layout>
  );
}
