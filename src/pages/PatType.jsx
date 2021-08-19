import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/PatType/Form";
import TableContent from "../components/PatType/TableContent";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readPatTypes } from "../redux/actions/pat-type";

export default function PatType() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const patTypes = useSelector((state) => state.patType.data);
  useEffect(() => {
    return dispatch(readPatTypes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <div>
          <Title name="Listado de tipos de paciente" />
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white w-44 px-8 ml-4 float-right text-xs py-1 rounded"
          >
            Agregar
          </button>
        </div>
        <Modal
          title="Agregar Tipo de paciente"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <Form setShowModal={setShowModal} />
        </Modal>
        <Table>
          <TableContent patTypes={patTypes} />
        </Table>
      </div>
    </Layout>
  );
}
