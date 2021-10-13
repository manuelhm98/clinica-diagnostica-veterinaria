import { useState } from "react";
import TableContent from "../components/BrandType/TableContent";
import Form from "../components/BrandType/Form";
import InputSearch from "../components/Global/InputSearch";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";

export default function BrandType() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de tipos de marca" />
        <div style={{ width: "70%" }}>
          <InputSearch
            label="Buscar por el nombre del tipo de marca"
            placeholder="Escribe el nombre del tipo de marca....."
          />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          title="Agregar tipo de marca"
        >
          <Form setShowModal={setShowModal} />
        </Modal>
        <Table>
            <TableContent />
        </Table>
      </div>
    </Layout>
  );
}
