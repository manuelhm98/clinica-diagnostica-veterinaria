import { useState } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Form from "./Form";

export default function TableBody({ vendors }) {
  const [newVendor, setNewVendor] = useState();
  const [showModal, setShowModal] = useState(false);
  const handleEdit = (vendor) => {
    setNewVendor(vendor);
    setShowModal(true);
  };
  return (
    <>
      {vendors &&
        vendors.length > 0 &&
        vendors.map((vendor) => (
          <tr key={vendor.id}>
            <TD name={vendor.id} />
            <TD name={vendor.name} />
            <TD name={vendor.nameVendor} />
            <TD name={vendor.phone} />
            <TD name={vendor.addres} />
            <TD name={vendor.nBank} />
            <TD>
              <button
                onClick={() => handleEdit(vendor)}
                className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
              >
                Editar
              </button>
            </TD>
          </tr>
        ))}
      <Modal
        title="Actualizar Proveedor"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <Form setShowModal={setShowModal} vendor={newVendor} />
      </Modal>
    </>
  );
}
   