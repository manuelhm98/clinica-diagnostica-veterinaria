import { useState } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import TH from "../Global/TH";
import Form from "./Form";

export default function TableContent({ categories }) {
  const [newCategory, setNewCategory] = useState();
  const [showModal, setShowModal] = useState(false);
  const handleEdit = (brand) => {
    setNewCategory(brand);
    setShowModal(true);
  };
  return (
    <>
      <thead>
        <tr>
          <TH name="ID" />
          <TH name="Nombre" />
          <TH name="Acciones" />
        </tr>
      </thead>
      <tbody>
        {categories?.length > 0 &&
          categories?.map((c) => (
            <tr key={c.id}>
              <TD name={c.id} />
              <TD name={c.type} />
              <TD>
                <button
                  onClick={() => handleEdit(c)}
                  className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
                >
                  Editar
                </button>
              </TD>
            </tr>
          ))}
      </tbody>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Editar Categoria"
      >
        <Form category={newCategory} setShowModal={setShowModal} />
      </Modal>
    </>
  );
}
