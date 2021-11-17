import { useState, useEffect } from "react";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import Form from "../components/Estethic/EstethicService/Form";
import { useDispatch, useSelector } from "react-redux";
import { readEstethicServices } from "../redux/actions/estethic-service";
import TableContent from "../components/Estethic/EstethicService/TableContent";
import Pagination from "../components/Global/Pag";

export default function EstethicService() {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const estethic = useSelector((state) => state.estethicService.data);
  useEffect(() => {
    return dispatch(readEstethicServices(page));
  }, [dispatch, page]);
  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <div>
          <Title name="Listado de servicios esteticos" />
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white mt-3 px-8 ml-4 float-right text-xs py-1 rounded"
          >
            Agregar
          </button>
        </div>
        <Table>
          <TableContent estethic={estethic} />
        </Table>
        <Pagination
          last={estethic?.totalpages}
          className="pagination-bar"
          onPageChange={setPage}
          totalCount={estethic?.totalItems}
          currentPage={estethic?.currentPage}
          pageSize={estethic?.take}
        />
        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          title="Agregar servicio estetico"
        >
          <Form setShowModal={setShowModal} />
        </Modal>
      </div>
    </Layout>
  );
}
