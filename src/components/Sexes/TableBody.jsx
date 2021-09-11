import { useState } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Form from "./Form";

export default function TableBody({ sexes }) {
  const [show, setShow] = useState(false);
  const [sex, setSex] = useState();
  const handleEdit = (sex) => {
    setShow(true);
    setSex(sex);
  };
  return (
    <>
      {sexes.length >= 1 ? (
        sexes.map((sex) => (
          <tr key={sex.type}>
            <TD name={sex.id} />
            <TD name={sex.type} />
            <TD>
              <button
                onClick={() => handleEdit(sex)}
                className="bg-green-500 px-4 py-1 rounded text-white"
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
      <Modal setShowModal={setShow} showModal={show} title="Editar sexo">
        <Form sex={sex} setShowModal={setShow} />
      </Modal>
    </>
  );
}
