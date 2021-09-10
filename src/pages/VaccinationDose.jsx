import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableContent from "../components/VaccinationDose/TableContent";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Form from "../components/VaccinationDose/Form";
import Layout from "../layout/Layout";
import { readVaccinationDose } from "../redux/actions/vaccination-dose";
import { readEmployeById } from "../redux/actions/employee";

export default function VaccinationDose() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const vaccinationDoses = useSelector((state) => state.vaccinationDose.data);
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  useEffect(() => {
    return dispatch(readVaccinationDose());
  }, [dispatch]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de dosis de vacunacion" />
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <Modal showModal={showModal} setShowModal={setShowModal} title="Agredar dosis de vacunacion">
            <Form setShowModal={setShowModal}/>
        </Modal>
        <Table>
            <TableContent user={user?.users} vaccinationDoses={vaccinationDoses}/>
        </Table>
      </div>
    </Layout>
  );
}
