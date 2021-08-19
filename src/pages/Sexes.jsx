import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Sexes/Form";
import TableContent from "../components/Sexes/TableContent";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readSexes } from "../redux/actions/sexes";

export default function Sexes() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const sexes = useSelector((state) => state.sex.data);
  useEffect(() => {
    return dispatch(readSexes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <div>
          <Title name="Listado de Sexos" />
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white w-44 px-8 ml-4 float-right text-xs py-1 rounded"
          >
            Agregar
          </button>
        </div>
        <Modal
          title="Agregar Sexo"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <Form setShowModal={setShowModal} />
        </Modal>
        <Table>
          <TableContent sexes={sexes} />
        </Table>
      </div>
    </Layout>
  );
}
