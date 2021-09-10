import { useState } from "react";
import Form from "./Form";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import { checkRole } from "../../utils/checkRole";

export default function TableBody({ species, user }) {
  const [showModal, setShowModal] = useState(false);
  const [specie, setSpecie] = useState();
  const edit = (specie) => {
    setSpecie(specie);
    setShowModal(true);
  };
  return (
    <>
      {species.species?.length >= 1 ? (
        species.species?.map((specie) => (
          <tr key={specie.type}>
            <TD name={specie.id} />
            <TD name={specie.type} />
            {checkRole(user) === 1 && (
              <TD>
                <div className="flex">
                  <button
                    onClick={() => edit(specie)}
                    className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
                  >
                    Editar
                  </button>
                </div>
              </TD>
            )}
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
        showModal={showModal}
        setShowModal={setShowModal}
        title="Actualizar Especie"
      >
        <Form specie={specie} setShowModal={setShowModal} />
      </Modal>
    </>
  );
}
