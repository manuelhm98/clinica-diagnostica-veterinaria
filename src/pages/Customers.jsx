import { useState, useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Customers/Form";

import InputSearch from "../components/Global/InputSearch";
import Modal from "../components/Global/Modal";

import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readCustomers } from "../redux/actions/customers";
import { readEmployeById } from "../redux/actions/employee";
import Waiting from "../components/Global/Waiting";
const Pagination = lazy(() => import("../components/Global/Pag"));
const TableContent = lazy(() => import("../components/Customers/TableContent"));
const Table = lazy(() => import("../components/Global/Table"));

export default function Customers() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [last, setLast] = useState();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.data);
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  useEffect(() => {
    return dispatch(readCustomers(name, last, page, 25, state ? 1 : 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, last, page, state]);
  return (
    <Layout>
      <div className="p-5">
        <Title name="Listado de Clientes" />
        <div className="grid grid-cols-2 gap-4" style={{ width: "100%" }}>
          <InputSearch
            label="Buscar por nombre"
            placeholder="Escribe el nombre para buscar"
            handleChange={(e) => setName(e.currentTarget.value)}
          />
          <InputSearch
            label="Buscar por apellido"
            placeholder="Escribe el apellido para buscar"
            handleChange={(e) => setLast(e.currentTarget.value)}
          />
        </div>
        <div>
          <label className="text-xs">Mostrar</label>
          <div className="text-xl font-semibold flex mt-1">
            <div className="relative mt-1 ml-3 inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                checked={state}
                onClick={() => setState(!state)}
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <span className="text-sm font-normal text-gray-600 mt-1">
              {state ? "Activos" : "Inactivos"}
            </span>
          </div>
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
        <Suspense fallback={<Waiting />}>
          <Table>
            <TableContent
              setState={setState}
              user={user?.users}
              customers={customers.customers}
            />
          </Table>
          <Pagination
            last={customers?.totalpages}
            className="pagination-bar"
            onPageChange={setPage}
            totalCount={customers?.totalItems}
            currentPage={customers?.currentPage}
            pageSize={customers?.take}
          />
        </Suspense>
      </div>
    </Layout>
  );
}
