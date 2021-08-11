import { useState, useEffect } from "react";
import TableContent from "../components/Roles/TableContent";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import Modal from "../components/Global/Modal";
import Form from "../components/Roles/Form";
import { useDispatch, useSelector } from "react-redux";
import { readRoles } from "../redux/actions/role";

export default function Roles() {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.role.data);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    return dispatch(readRoles());
  }, [dispatch]);
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <Title name="Listado de roles" />
        <Table>
          <TableContent roles={roles} />
        </Table>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 w-44 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Agregar rol"
      >
        <Form setShowModal={setShowModal} />
      </Modal>
    </Layout>
  );
}
