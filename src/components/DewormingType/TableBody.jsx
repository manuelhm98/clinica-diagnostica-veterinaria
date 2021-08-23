import { useState } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Form from "./Form";

export default function TableBody({ dewormingTypes }) {
  const [showModal, setShowModal] = useState(false);
  const [dtype, setDtype] = useState();
  const handleEdit = (dtype) => {
    setDtype(dtype);
    setShowModal(true);
  };
  return (
    <>
      {dewormingTypes.dewormingType &&
        dewormingTypes.dewormingType.map((dwtype) => (
          <tr key={dwtype.id}>
            <TD name={dwtype.id} />
            <TD name={dwtype.type} />
            <TD name={dwtype.brand} />
            <TD>
              <div className="flex">
                <button
                  onClick={() => handleEdit(dwtype
                    )}
                  className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
                >
                  Editar
                </button>
              </div>
            </TD>
          </tr>
        ))}
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        title="Actualizar tipo de desparacitacion"
      >
        <Form setShowModal={setShowModal} dtype={dtype} />
      </Modal>
    </>
  );
}
