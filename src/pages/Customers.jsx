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
  const [search, setSearch] = useState({ name: "", last: "",phone:"" });
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [state, setState] = useState(true);
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.data);
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  useEffect(() => {
    return dispatch(
      readCustomers(search.name, search.last,search.phone, page, limit, state ? 1 : 0)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page, state]);

  const handleChange = (e) => {
    setSearch({ ...search, [e.currentTarget.name]: e.currentTarget.value });
    setPage(1);
  };
  const handleLimit = (e) => {
    setLimit(e);
    setPage(1);
  };
  return (
    <Layout>
      <div className="p-5">
        <Title name="Listado de Clientes" />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ width: "100%" }}
        >
          <InputSearch
            label="Buscar por nombre"
            placeholder="Escribe el nombre para buscar"
            name="name"
            handleChange={(e) => handleChange(e)}
          />
          <InputSearch
            label="Buscar por apellido"
            placeholder="Escribe el apellido para buscar"
            name="last"
            handleChange={(e) => handleChange(e)}
          />
           <InputSearch
            label="Buscar por telefono"
            placeholder="Escribe el telefono para buscar"
            name="phone"
            handleChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex">
          <div>
            <label className="text-xs font-semibold text-gray-500">
              Mostrar
            </label>
            <div className="text-xl font-semibold flex mt-1">
              <div className="relative ml-3 inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
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
          <div>
            <div className="flex flex-col mt-1 ml-20">
              <label className="text-xs font-semibold text-gray-500">
                Mostrar
              </label>
              <select
                onChange={(e) => handleLimit(e.currentTarget.value)}
                className="border w-60 rounded mt-1 text-xs py-1 outline-none "
              >
                <option disabled selected>
                  Cantidad a mostrar
                </option>
                <option value={5}>5</option>
                <option value={20}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
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
