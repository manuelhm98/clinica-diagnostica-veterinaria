import { useState } from "react";
import Modal from "../../Global/Modal";
import TD from "../../Global/TD";
import Form from "./Form";

export default function TableBody({ estethic }) {
  const [est, setEst] = useState();
  const [showModal, setShowModal] = useState(false);
  const handleEdit = (est) => {
    setEst(est);
    setShowModal(true);
  };
  return (
    <>
      {estethic &&
        estethic?.map((es) => (
          <tr key={es.id}>
            <TD name={es.id} />
            <TD name={es.name} />
            <TD name={"$" + es.price} />
            <TD name={es.size} />
            <TD>
              <button
                onClick={() => handleEdit(es)}
                className="bg-green-500 text-white rounded px-4 py-1"
              >
                Editar
              </button>
            </TD>
          </tr>
        ))}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Actualizar Servicio Estetico"
      >
        <Form est={est} setShowModal={setShowModal} />
      </Modal>
    </>
  );
}
