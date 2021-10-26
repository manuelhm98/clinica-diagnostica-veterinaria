import { useState } from "react";
import TD from "../Global/TD";
import Modal from "../Global/Modal";
import Form from "./Form";
import { checkRole } from "../../utils/checkRole";

export default function TableBody({ colors, user }) {
  const [color, setColor] = useState();
  const [showModal, setShowModal] = useState(false);
  const edit = (color) => {
    setColor(color);
    setShowModal(true);
  };

  return (
    <>
      {colors ? (
        colors.length ? (
          colors?.map((color) => (
            <tr key={color.type}>
              <TD name={color.id} />
              <TD name={color.type} />
              {checkRole(user) === 1 && (
                <TD>
                  <div className="flex">
                    <button
                      onClick={() => edit(color)}
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
        )
      ) : (
        ""
      )}
      <Modal
        title="Actualizar color"
        setShowModal={setShowModal}
        showModal={showModal}
      >
        <Form color={color} setShowModal={setShowModal} showModal={showModal} />
      </Modal>
    </>
  );
}
