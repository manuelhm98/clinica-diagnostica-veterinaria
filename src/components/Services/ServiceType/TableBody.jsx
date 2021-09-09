import { useState } from "react";
import { checkRole } from "../../../utils/checkRole";
import Modal from "../../Global/Modal";
import TD from "../../Global/TD";
import Form from "./Form";

export default function TableBody({ serviceTypes, user }) {
  const [showModal, setShowModal] = useState(false);
  const [serviceTypeEdit, setServiceTypeEdit] = useState();
  const edit = (sType) => {
    setServiceTypeEdit(sType);
    setShowModal(true);
  };

  //Junta de vigilancia de la profesion medica veterinaria
  return (
    <>
      {serviceTypes?.clinicalStype &&
        serviceTypes.clinicalStype.map((sType) => (
          <tr key={sType.id}>
            <TD name={sType.id} />
            <TD name={sType.type} />
            <TD name={"$" + sType.price} />
            {checkRole(user) === 1 && (
              <TD>
                <div className="flex">
                  <button
                    onClick={() => edit(sType)}
                    className="bg-green-500 text-white py-1 text-xs px-4 rounded mr-4"
                  >
                    Editar
                  </button>
                </div>
              </TD>
            )}
          </tr>
        ))}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Actualizar tipo de servicio"
      >
        <Form setShowModal={setShowModal} serviceType={serviceTypeEdit} />
      </Modal>
    </>
  );
}
