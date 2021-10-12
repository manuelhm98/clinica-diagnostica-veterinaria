import { useState } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import TH from "../Global/TH";
import Form from "./Form";

export default function TableContent({ brands }) {
  const [newBrand, setNewBrand] = useState();
  const [showModal, setShowModal] = useState(false);
  const handleEdit = (brand) => {
    setNewBrand(brand);
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
        {brands.length > 0 &&
          brands?.map((b) => (
            <tr key={b.id}>
              <TD name={b.id} />
              <TD name={b.brand} />
              <TD>
                <button
                  onClick={() => handleEdit(b)}
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
        title="Editar Marca"
      >
        <Form brand={newBrand} setShowModal={setShowModal} />
      </Modal>
    </>
  );
}
