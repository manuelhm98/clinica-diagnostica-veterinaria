import { useState, useEffect } from "react";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Form from "../components/Species/Form";
import TableContent from "../components/Species/TableContent";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { readSpecies } from "../redux/actions/species";

export default function Species() {
  const [showModal, setShowModal] = useState();
  const dispatch = useDispatch();
  const species = useSelector((state) => state.specie.data);
  useEffect(() => {
    return dispatch(readSpecies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de especies" />
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
          title="Agregar Especie"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <Form setShowModal={setShowModal} />
        </Modal>
        <Table>
          <TableContent species={species} />
        </Table>
      </div>
    </Layout>
  );
}
