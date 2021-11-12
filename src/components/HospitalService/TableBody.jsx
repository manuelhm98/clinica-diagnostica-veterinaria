import { useState } from "react";
import { checkRole } from "../../utils/checkRole";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Form from "./Form";

export default function TableBody({ services }) {
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState();
  const handleEdit = (data) => {
    setShowModal(true);
    setService(data);
  };
  return (
    <>
      {services?.hospitalService?.map((s) => (
        <tr key={s.type}>
          <TD name={s.id} />
          <TD name={s.name} />
          <TD name={"$" + s.price} />
          <TD>
            <button
              onClick={() => handleEdit(s)}
              className="bg-blue-500 text-white px-4 py-1 rounded text-xs font-semibold focus:outline-none focus:border-0"
            >
              Editar
            </button>
          </TD>
        </tr>
      ))}
      <Modal
        title="Editar servicio"
        setShowModal={setShowModal}
        showModal={showModal}
      >
        <Form service={service} setShowModal={setShowModal}></Form>
      </Modal>
    </>
  );
}
