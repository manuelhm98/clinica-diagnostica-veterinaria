import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Patients/Form";
import TableContent from "../components/Patients/TableContent";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readBreeds } from "../redux/actions/breeds";
import { readColors } from "../redux/actions/colors";
import { readCustomers } from "../redux/actions/customers";
import { readPatTypes } from "../redux/actions/pat-type";
import { readSexes } from "../redux/actions/sexes";
import { readPatients } from "../redux/actions/patiences";

export default function Patiences() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.data);
  const breeds = useSelector((state) => state.breed.data);
  const sexes = useSelector((state) => state.sex.data);
  const patTypes = useSelector((state) => state.patType.data);
  const colors = useSelector((state) => state.color.data);
  const patients = useSelector((state)=>state.patient.data)
  useEffect(() => {
    dispatch(readCustomers());
    dispatch(readBreeds());
    dispatch(readColors());
    dispatch(readPatTypes());
    dispatch(readSexes());
    dispatch(readPatients())
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de Pacientes" />
        <div>
          <input
            className="border w-96 px-4 rounded"
            placeholder="Escribe para buscar"
          ></input>
          <button className="bg-green-500 text-white text-xs py-1 px-8 ml-4 rounded">
            Buscar
          </button>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <Modal
          title="Agregar Cliente"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <Form
            customers={customers}
            sexes={sexes}
            breeds={breeds}
            colors={colors}
            patTypes={patTypes}
            setShowModal={setShowModal}
          />
        </Modal>
        <Table>
          <TableContent patients={patients} />
        </Table>
      </div>
    </Layout>
  );
}
