import { useState, useEffect } from "react";
import InputSearch from "../components/Global/InputSearch";
import Title from "../components/Global/Title";
import TableContent from "../components/Vendors/TableContent";
import Layout from "../layout/Layout";
import Table from "../components/Global/Table";
import Modal from "../components/Global/Modal";
import Form from "../components/Vendors/Form";
import { useDispatch, useSelector } from "react-redux";
import { readVendors } from "../redux/actions/vendors";
import Pagination from "../components/Global/Pag";

export default function Vendors() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState({ name: "", vendorName: "" });
  const [page, setPage] = useState(1);
  const vendors = useSelector((state) => state.vendor.data);
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(readVendors(page, search.name, search.vendorName));
  }, [dispatch, search, page]);

  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de proveedores" />
        <div className="grid grid-cols-2 gap-10" style={{ width: "70%" }}>
          <InputSearch
            label="Buscar por el nombre del proveedor"
            placeholder="Escribe el nombre del proveedor....."
            handleChange={(e) =>
              setSearch({ ...search, name: e.currentTarget.value })
            }
          />
          <InputSearch
            label="Buscar por el nombre de vendedor"
            placeholder="Escribe el nombre de vendedor....."
            handleChange={(e) =>
              setSearch({ ...search, vendorName: e.currentTarget.value })
            }
          />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title="Agregar proveedor"
        >
          <Form setShowModal={setShowModal} />
        </Modal>
        <Table>
          <TableContent vendors={vendors?.vendors} />
        </Table>
        <Pagination
          last={vendors?.totalpages}
          className="pagination-bar"
          onPageChange={setPage}
          totalCount={vendors?.totalItems}
          currentPage={vendors?.currentPage}
          pageSize={vendors?.take}
        />
      </div>
    </Layout>
  );
}
