import { useState } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Form from "./Form";

export default function TableBody({ pestControlTypes }) {
  const [showModal, setShowModal] = useState(false);
  const [ptype, setPtype] = useState();
  const handleEdit = (ptype) => {
    setShowModal(true);
    setPtype(ptype);
  };
  return (
    <>
      {pestControlTypes.pestControlType &&
        pestControlTypes.pestControlType.map((pctype) => (
          <tr key={pctype.id}>
            <TD name={pctype.id} />
            <TD name={pctype.type} />
            <TD>
              <div className="flex">
                <button
                  onClick={() => handleEdit(pctype)}
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
        title="Actualizar tipo de control de plagas"
      >
        <Form setShowModal={setShowModal} ptype={ptype} />
      </Modal>
    </>
  );
}
