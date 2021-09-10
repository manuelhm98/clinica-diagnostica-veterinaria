import { useState } from "react";
import TD from "../Global/TD";
import Modal from "../Global/Modal";
import Form from "./Form";
import { checkRole } from "../../utils/checkRole";

export default function TableBody({ vaccinationDoses, user }) {
  const [showModal, setShowModal] = useState(false);
  const [dose, setDose] = useState();
  const handleEdit = (dose) => {
    setDose(dose);
    setShowModal(true);
  };
  return (
    <>
      {vaccinationDoses.vaccinationDose &&
        vaccinationDoses.vaccinationDose.map((vdosis) => (
          <tr key={vdosis.id}>
            <TD name={vdosis.id} />
            <TD name={vdosis.type} />
            {checkRole(user) === 1 && (
              <TD>
                <div className="flex">
                  <button
                    onClick={() => handleEdit(vdosis)}
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
        title="Editar dosis de vacunacion"
      >
        <Form dose={dose} setShowModal={setShowModal} />
      </Modal>
    </>
  );
}
