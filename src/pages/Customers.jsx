import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Customers/Form";
import TableContent from "../components/Customers/TableContent";
import InputSearch from "../components/Global/InputSearch";
import Modal from "../components/Global/Modal";
import Pagination from "../components/Global/Pagination";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readCustomers } from "../redux/actions/customers";
import { readEmployeById } from "../redux/actions/employee";

export default function Customers() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [last, setLast] = useState();
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const customers = useSelector((state)=>state.customer.data)
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  useEffect(() => {
    return dispatch(readCustomers(name,last,page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name,last,page]);
  return (
    <Layout>
      <div className="p-5">
        <Title name="Listado de Clientes" />
        <div className="grid grid-cols-2 gap-4" style={{width:"100%"}}>
          <InputSearch
            label="Buscar por nombre"
            placeholder="Escribe el nombre para buscar"
            handleChange={(e)=>setName(e.currentTarget.value)}
          />
           <InputSearch
            label="Buscar por apellido"
            placeholder="Escribe el apellido para buscar"
            handleChange={(e)=>setLast(e.currentTarget.value)}
          />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-8 mt-4 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <Modal
          title="Agregar Cliente"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <Form setShowModal={setShowModal} />
        </Modal>
        <Table>
          <TableContent user={user?.users} customers={customers.customers} />
        </Table>
        <Pagination data={customers} method={setPage} />
      </div>
    </Layout>
  );
}
