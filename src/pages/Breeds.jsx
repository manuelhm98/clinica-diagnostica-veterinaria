import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Breeds/Form";
import TableContent from "../components/Breeds/TableContent";
import InputSearch from "../components/Global/InputSearch";
import Modal from "../components/Global/Modal";
import Pagination from "../components/Global/Pag";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readBreeds } from "../redux/actions/breeds";
import { readEmployeById } from "../redux/actions/employee";
import { listSpecies } from "../redux/actions/species";

export default function Breeds() {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [type, setType] = useState();
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breed.data);
  const species = useSelector((state) => state.specie.data);
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  useEffect(() => {
    dispatch(readBreeds(page, type));
    dispatch(listSpecies());
    return;
  }, [dispatch, page, type]);
  const handleChange = (e) => {
    setType(e.currentTarget.value);
    setPage(1);
  };
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de razas" />
        <div style={{ width: "70%" }}>
          <InputSearch
            label="Buscar por el nombre de la raza"
            placeholder="Escribe el nombre de la raza....."
            handleChange={(e) => handleChange(e)}
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
          <TableContent user={user?.users} breeds={breeds} />
        </Table>
        <Pagination
          last={breeds?.totalpages}
          className="pagination-bar"
          onPageChange={setPage}
          totalCount={breeds?.totalItems}
          currentPage={breeds?.currentPage}
          pageSize={breeds?.take}
        />
      </div>
    </Layout>
  );
}
