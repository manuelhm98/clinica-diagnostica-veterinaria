import React, { useState,useEffect } from "react";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import TableContent from "../components/Services/ServiceType/TableContent";
import Layout from "../layout/Layout";
import Modal from "../components/Global/Modal";
import Form from "../components/Services/ServiceType/Form";
import { useDispatch,useSelector } from "react-redux";
import { readServiceType } from "../redux/actions/service-type";

export default function ServiceType() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const serviceTypes = useSelector((state)=>state.serviceType.data)
  console.log(serviceTypes)
  useEffect(() => {
    dispatch(readServiceType())
    return;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de tipos de servicios" />
        <div>
          <input
            className="border w-96 px-4 rounded"
            placeholder="Escribe para buscar"
          />
        </div>
        <button
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
          onClick={() => setShowModal(true)}
        >
          Agregar
        </button>
        <Table>
          <TableContent serviceTypes={serviceTypes}/>
        </Table>
        <Modal
          title="Agregar tipo de servicio"
          setShowModal={setShowModal}
          showModal={showModal}
        >
          <Form setShowModal={setShowModal} />
        </Modal>
      </div>
    </Layout>
  );
}
