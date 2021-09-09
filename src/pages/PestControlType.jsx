import { useState, useEffect } from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import Modal from "../components/Global/Modal";
import Form from "../components/PestControlType/Form";
import TableContent from "../components/PestControlType/TableContent";
import { useDispatch, useSelector } from "react-redux";
import { readPestControlTypes } from "../redux/actions/pest-control-type";
import Table from "../components/Global/Table";
import { readEmployeById } from "../redux/actions/employee";

export default function PestControlType() {
  const [showModal, setShowModal] = useState(false);
  const pestControlTypes = useSelector((state) => state.pestControlType.data);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  useEffect(() => {
    return dispatch(readPestControlTypes());
  }, [dispatch]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de control de plagas" />
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <Modal
          title="Agregar tipo de control de plagas"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <Form setShowModal={setShowModal} />
        </Modal>
        <Table>
          <TableContent user={user?.users} pestControlTypes={pestControlTypes} />
        </Table>
      </div>
    </Layout>
  );
}
