import React, { useState, useEffect } from "react";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import TableContent from "../components/Services/ServiceType/TableContent";
import Layout from "../layout/Layout";
import Modal from "../components/Global/Modal";
import Form from "../components/Services/ServiceType/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  readPaginServiceTypes
} from "../redux/actions/service-type";
import InputSearch from "../components/Global/InputSearch";
import Pagination from "../components/Global/Pagination";
import { readEmployeById } from "../redux/actions/employee";

export default function ServiceType() {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const serviceTypes = useSelector((state) => state.serviceType.data);
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  useEffect(() => {
    dispatch(readPaginServiceTypes(page, type));
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, type]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de tipos de servicios" />
        <div style={{width:"70%"}}>
          <InputSearch
            label="Buscar por tipo de servicio"
            placeholder="Escribe el nombre del tipo de servicio..."
            handleChange={(e) => setType(e.currentTarget.value)}
          />
        </div>
        <button
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
          onClick={() => setShowModal(true)}
        >
          Agregar
        </button>
        <Table>
          <TableContent user={user?.users} serviceTypes={serviceTypes} />
        </Table>
        <Pagination data={serviceTypes} method={setPage} />
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
