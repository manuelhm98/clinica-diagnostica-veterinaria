import { useState } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Form from "./Form";

export default function TableBody({ roles }) {
  const [show, setShow] = useState(false);
  const [rol, setRol] = useState();
  const handleEdit = (rol) => {
    setRol(rol);
    setShow(true);
  };
  return (
    <>
      {roles &&
        roles.map((rol) => (
          <tr key={rol.id}>
            <TD name={rol.id} />
            <TD name={rol.rol} />
            <TD>
              <div className="flex">
                <button
                  onClick={() => handleEdit(rol)}
                  className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
                >
                  Editar
                </button>
              </div>
            </TD>
          </tr>
        ))}
      <Modal setShowModal={setShow} showModal={show} title="Editar rol">
        <Form rol={rol} setShowModal={setShow} />
      </Modal>
    </>
  );
}
