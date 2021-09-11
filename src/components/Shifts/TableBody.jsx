import { useState } from "react";
import TD from "../Global/TD";
import Modal from "../Global/Modal";
import Form from "./Form";

export default function TableBody({ shifts }) {
  const [show, setShow] = useState(false);
  const [shift, setShift] = useState();
  const handleEdit = (shift) => {
    setShift(shift);
    setShow(true);
  };
  return (
    <>
      {shifts &&
        shifts.map((shift) => (
          <tr key={shift.id}>
            <TD name={shift.id} />
            <TD name={shift.type} />
            <TD>
              <button
                onClick={() => handleEdit(shift)}
                className="bg-green-500 px-4 py-1 text-white rounded"
              >
                Editar
              </button>
            </TD>
          </tr>
        ))}
      <Modal setShowModal={setShow} showModal={show} title="Editar turno">
        <Form setShowModal={setShow} shift={shift} />
      </Modal>
    </>
  );
}
