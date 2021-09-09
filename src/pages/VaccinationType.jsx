import { useState,useEffect } from "react";
import Form from "../components/VaccinationType/Form";
import Modal from "../components/Global/Modal";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import Table from "../components/Global/Table"
import TableContent from "../components/VaccinationType/TableContent"
import { useSelector,useDispatch } from "react-redux";
import { readVaccinationType } from "../redux/actions/vaccination-type";
import { readEmployeById } from "../redux/actions/employee";

export default function VaccinationType() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const vaccinationTypes = useSelector((state)=>state.vaccinationType.data)
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  useEffect(() => {
    return dispatch(readVaccinationType())
  }, [dispatch]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de tipos de vacunacion" />
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <Table>
          <TableContent user={user?.users} vaccinationTypes={vaccinationTypes} />
        </Table>
        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          title="Agregar tipo de vacunacion"
        >
          <Form setShowModal={setShowModal} />
        </Modal>
      </div>
    </Layout>
  );
}
