import { useState } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Form from "./Form";

export default function TableBody({ patTypes }) {
  const [show, setShow] = useState(false);
  const [patType, setPatType] = useState();
  const handleEdit = (p) => {
    setPatType(p);
    setShow(true);
  };
  return (
    <>
      {patTypes.length >= 1 ? (
        patTypes.map((patType) => (
          <tr key={patType.type}>
            <TD name={patType.id} />
            <TD name={patType.type} />
            <TD>
              <button
                onClick={() => handleEdit(patType)}
                className="bg-green-500 px-4 py-1 text-white rounded"
              >
                Editar
              </button>
            </TD>
          </tr>
        ))
      ) : (
        <tr>
          <td>
            <p className="p-4">No hay registros para mostrar</p>
          </td>
        </tr>
      )}
      <Modal
        setShowModal={setShow}
        showModal={show}
        title="Actualizar tipo de paciente"
      >
        <Form setShowModal={setShow} patType={patType} />
      </Modal>
    </>
  );
}
