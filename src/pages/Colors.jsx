import { useState, useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readColors } from "../redux/actions/colors";
import InputSearch from "../components/Global/InputSearch";
import { readEmployeById } from "../redux/actions/employee";
import Waiting from "../components/Global/Waiting";
const TableContent = lazy(() => import("../components/Colors/TableContent"));
const Pagination = lazy(() => import("../components/Global/Pag"));
const Modal = lazy(() => import("../components/Global/Modal"));
const Table = lazy(() => import("../components/Global/Table"));
const Form = lazy(() => import("../components/Colors/Form"));

export default function Colors() {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [type, setType] = useState();
  const [limit, setLimit] = useState(25);
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.color.data);
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  useEffect(() => {
    return dispatch(readColors(page, type, limit));
  }, [page, type, dispatch, limit]);
  const handleChange = (e) => {
    setType(e.currentTarget.value);
    setPage(1);
  };
  const handleLimit = (e) => {
    setLimit(e);
    setPage(1);
  };
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de colores" />
        <div className="flex">
          <div style={{ width: "70%" }}>
            <InputSearch
              label="Buscar por el nombre del color"
              placeholder="Escribe el nombre del color....."
              handleChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <div className="flex flex-col mt-3">
          <label className="text-xs font-semibold text-gray-500">Mostrar</label>
          <select
            onChange={(e) => handleLimit(e.currentTarget.value)}
            className="border w-60 rounded text-xs py-1 outline-none "
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
        <Suspense fallback={<Waiting />}>
          <Modal
            title="Agregar Color"
            showModal={showModal}
            setShowModal={setShowModal}
          >
            <Form setShowModal={setShowModal} />
          </Modal>
          <Table>
            <TableContent
              setShowModal={setShowModal}
              showModal={showModal}
              user={user?.users}
              colors={colors.color}
            />
          </Table>
          <Pagination
            last={colors?.totalpages}
            className="pagination-bar"
            onPageChange={setPage}
            totalCount={colors?.totalItems}
            currentPage={colors?.currentPage}
            pageSize={colors?.take}
          />
        </Suspense>
      </div>
    </Layout>
  );
}
