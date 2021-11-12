import { useState, useEffect } from "react";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Form from "../components/HospitalService/Form";
import TableContent from "../components/HospitalService/TableContent";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { readHospitalServices } from "../redux/actions/hospital-services";
import Pagination from "../components/Global/Pag";

export default function HospitalService() {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const services = useSelector((state) => state.hospitalService.data);
  useEffect(() => {
    return dispatch(readHospitalServices(page));
  }, [dispatch, page]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de Servicios Hospitalarios" />
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white mt-3 px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <Table>
          <TableContent services={services} />
        </Table>
        <Pagination
          last={services?.totalpages}
          className="pagination-bar"
          onPageChange={setPage}
          totalCount={services?.totalItems}
          currentPage={services?.currentPage}
          pageSize={services?.take}
        />
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Agregar Servicio"
      >
        <Form setShowModal={setShowModal} />
      </Modal>
    </Layout>
  );
}
