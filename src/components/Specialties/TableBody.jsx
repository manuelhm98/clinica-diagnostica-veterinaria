import { useState } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Form from "./Form"

export default function TableBody({ specialties }) {
  const [spe, setSpe] = useState();
  const [showModal, setShowModal] = useState(false);
  const handleEdit = (spe) => {
    setShowModal(true);
    setSpe(spe)
  };
  return (
    <>
      {specialties &&
        specialties.map((spc) => (
          <tr key={spc.id}>
            <TD name={spc.id} />
            <TD name={spc.type} />
            <TD>
              <div className="flex">
                <button
                  onClick={() => handleEdit(spc)}
                  className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
                >
                  Editar
                </button>
              </div>
            </TD>
          </tr>
        ))}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Actualizar Especialidad"
      >
        <Form specially={spe} id={spe?.id} setShowModal={setShowModal} />
      </Modal>
    </>
  );
}
