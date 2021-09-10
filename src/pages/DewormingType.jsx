import { useState, useEffect } from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { readDewormingType } from "../redux/actions/deworming-type";
import Modal from "../components/Global/Modal";
import Form from "../components/DewormingType/Form";
import Table from "../components/Global/Table"
import TableContent from "../components/DewormingType/TableContent";
import { readEmployeById } from "../redux/actions/employee";

export default function DewormingType() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const dewormingTypes = useSelector((state) => state.dewormingType.data);
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  useEffect(() => {
    return dispatch(readDewormingType());
  }, [dispatch]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de tipos de desparacitacion" />
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <Table>
          <TableContent user={user?.users} dewormingTypes={dewormingTypes}/>
        </Table>
        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          title="Agregar nuevo tipo de desparacitacion"
        >
          <Form setShowModal={setShowModal} />
        </Modal>
      </div>
    </Layout>
  );
}
