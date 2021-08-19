import { useState, useEffect } from "react";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Form from "../components/Species/Form";
import TableContent from "../components/Species/TableContent";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { readSpecies } from "../redux/actions/species";
import Pagination from "../components/Global/Pagination"
import InputSearch from "../components/Global/InputSearch";

export default function Species() {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("")
  const dispatch = useDispatch();
  const species = useSelector((state) => state.specie.data);
  useEffect(() => {
    return dispatch(readSpecies(page,type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page,type]);
  
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de especies" />
        <div style={{width:"70%"}}>
         <InputSearch label="Buscar por el nombre de la especie"
              placeholder="Escribe el nombre de la especie....."
              handleChange={(e) => setType(e.currentTarget.value)} />
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
        <Pagination data={species} method={setPage}/>
      </div>
    </Layout>
  );
}
