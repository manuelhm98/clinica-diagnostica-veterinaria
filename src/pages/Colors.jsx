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
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.color.data);
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  useEffect(() => {
    return dispatch(readColors(page, type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, type]);
  const handleChange = (e) => {
    setType(e.currentTarget.value);
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
