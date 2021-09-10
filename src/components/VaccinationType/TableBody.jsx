import { useState } from "react";
import { checkRole } from "../../utils/checkRole";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Form from "./Form";

export default function TableBody({ vaccinationTypes, user }) {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState();
  const handleEdit = (type) => {
    setType(type);
    setShowModal(true);
  };
  return (
    <>
      {vaccinationTypes.vaccinationType &&
        vaccinationTypes.vaccinationType.map((vctype) => (
          <tr key={vctype.id}>
            <TD name={vctype.id} />
            <TD name={vctype.type} />
            {checkRole(user) === 1 && (
              <TD>
                <div className="flex">
                  <button
                    onClick={() => handleEdit(vctype)}
                    className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
                  >
                    Editar
                  </button>
                </div>
              </TD>
            )}
          </tr>
        ))}
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        title="Actualizar tipo de vacunacion"
      >
        <Form setShowModal={setShowModal} type={type} />
      </Modal>
    </>
  );
}
