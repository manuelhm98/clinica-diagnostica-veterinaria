import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableContent from "../components/Shifts/TableContent";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readShifts } from "../redux/actions/shifts";
import Form from "../components/Shifts/Form";

export default function Shifts() {
  const shifts = useSelector((state) => state.shift.data);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(readShifts());
  }, [dispatch]);
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <Title name="Listado de turnos" />
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 w-44 text-white px-8 ml-4 float-right text-xs py-1 rounded"
          >
            Agregar
          </button>
        </div>
        <Table>
          <TableContent shifts={shifts} />
        </Table>
      </div>
      <Modal
        title="Agregar turno"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <Form setShowModal={setShowModal} />
      </Modal>
    </Layout>
  );
}
