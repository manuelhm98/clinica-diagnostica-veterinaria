import { useState, useEffect } from "react";
import Form from "../components/Category/Form";
import Modal from "../components/Global/Modal";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import TableContent from "../components/Category/TableContent";
import { readCategories } from "../redux/actions/category";
import Table from "../components/Global/Table";

const Category = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.data);
  useEffect(() => {
    return dispatch(readCategories());
  }, [dispatch]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de categorias" />
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
        >
          Agregar
        </button>
        <Table>
          <TableContent categories={category} />
        </Table>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Agregar categoria"
      >
        <Form setShowModal={setShowModal} />
      </Modal>
    </Layout>
  );
};

export default Category;
