import { useState,useEffect } from "react";
import Form from "../components/Specialties/Form";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import TableContent from "../components/Specialties/TableContent";
import { useDispatch,useSelector } from "react-redux";
import { readSpecialties } from "../redux/actions/specialties";

export default function Specialties() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const specialties = useSelector((state)=>state.specially.data)
  useEffect(() => {
      return dispatch(readSpecialties())
  }, [dispatch])
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <Title name="Listado de Especialidades" />
        <div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 w-44 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        </div>
        <Table>
            <TableContent specialties={specialties}/>
        </Table>
        
      </div>
      <Modal
        title="Agregar especilidad"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <Form setShowModal={setShowModal} />
      </Modal>
    </Layout>
  );
}
