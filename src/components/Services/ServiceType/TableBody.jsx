import { faExclamationTriangle, faSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DeleteModal from "../../Global/DeleteModal";
import Modal from "../../Global/Modal";
import TD from "../../Global/TD";
import Form from "./Form";

export default function TableBody({ serviceTypes }) {
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false)
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
            <TD>
              <div className="flex">
                <button
                  onClick={() => edit(sType)}
                  className="bg-green-500 text-white py-1 text-xs px-4 rounded mr-4"
                >
                  Editar
                </button>
                <button className="bg-red-500 text-white py-1 text-xs px-4 rounded mr-4">
                  Eliminar
                </button>
              </div>
            </TD>
          </tr>
        ))}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Actualizar tipo de servicio"
      >
        <Form setShowModal={setShowModal} serviceType={serviceTypeEdit} />
      </Modal>
      <Modal setShowModal={setShowModalDelete} showModal={showModalDelete}>
            <div className="p-3 flex flex-col justify-items-center content-center items-center">
                <FontAwesomeIcon className=" text-yellow-600 text-4xl" icon={faExclamationTriangle}/>
                <span className="font-medium mt-1">Estas seguro de eliminar este registro!!!</span>
                <div className="flex mt-3">
                    <button className="bg-blue-500 text-white text-xs py-1 px-4 rounded">Aceptar</button>
                    <button onClick={()=>setShowModalDelete(false)} className="bg-red-500 text-white text-xs py-1 px-4 rounded ml-4">Cancelar</button>
                </div>
            </div>
      </Modal>
    </>
  );
}
