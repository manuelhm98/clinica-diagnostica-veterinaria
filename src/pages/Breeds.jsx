import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Breeds/Form";
import TableContent from "../components/Breeds/TableContent";
import InputSearch from "../components/Global/InputSearch";
import Modal from "../components/Global/Modal";
import Pagination from "../components/Global/Pagination";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readBreeds } from "../redux/actions/breeds";
import { readSpecies } from "../redux/actions/species";

export default function Breeds() {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [type, setType] = useState();
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breed.data);
  const species = useSelector((state) => state.specie.data);
  useEffect(() => {
    dispatch(readBreeds(page, type));
    dispatch(readSpecies());
    return;
  }, [dispatch, page, type]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de razas" />
        <div style={{width:"70%"}}>
          <InputSearch
            label="Buscar por el nombre de la raza"
            placeholder="Escribe el nombre de la raza....."
            handleChange={(e) => setType(e.currentTarget.value)}
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
        <Pagination method={setPage} data={breeds} />
      </div>
    </Layout>
  );
}
