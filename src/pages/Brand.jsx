import { useState,useEffect } from "react";
import Form from "../components/Brand/Form";
import TableContent from "../components/Brand/TableContent";
import InputSearch from "../components/Global/InputSearch";
import Modal from "../components/Global/Modal";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useDispatch,useSelector } from "react-redux";
import { readBrands } from "../redux/actions/brand";

const Brand = () => {
  const brand = useSelector(state=>state.brand.data)
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    return dispatch(readBrands())
  }, [dispatch]);
  console.log(brand)
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de marcas" />
        <div style={{ width: "70%" }}>
          <InputSearch
            label="Buscar por el nombre de la marca"
            placeholder="Escribe el nombre de la marca....."
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
          title="Agregar marca"
        >
          <Form setShowModal={setShowModal} />
        </Modal>
        <Table>
          <TableContent brands={brand} />
        </Table>
      </div>
    </Layout>
  );
};

export default Brand;
