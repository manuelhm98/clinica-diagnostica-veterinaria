import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Breeds/Form";
import TableContent from "../components/Breeds/TableContent";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readBreeds } from "../redux/actions/breeds";
import { readSpecies } from "../redux/actions/species";

export default function Breeds() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breed.data);
  const species = useSelector((state) => state.specie.data);
  useEffect(() => {
    dispatch(readBreeds(1, ""));
    dispatch(readSpecies());
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de razas" />
        <div>
          <input
            className="border w-96 px-4 rounded"
            placeholder="Escribe para buscar"
          />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <Modal
          title="Agregar Raza"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <Form setShowModal={setShowModal} species={species} />
        </Modal>
        <Table>
          <TableContent breeds={breeds} />
        </Table>
      </div>
    </Layout>
  );
}
