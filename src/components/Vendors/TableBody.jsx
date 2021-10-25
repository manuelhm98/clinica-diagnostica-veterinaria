import { useState } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Details from "./Details";
import Form from "./Form";

export default function TableBody({ vendors }) {
  const [newVendor, setNewVendor] = useState();
  const [details, setDetails] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const handleEdit = (vendor) => {
    setNewVendor(vendor);
    setShowModal(true);
  };
  const handledetails = (vendor)=>{
    setShowModalDetails(true)
    setDetails(vendor)
  }
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
            <TD name={vendor.nBank} />
            <TD>
             <div className="flex">
             <button
                onClick={() => handleEdit(vendor)}
                className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
              >
                Editar
              </button>
              <button
                onClick={() => handledetails(vendor)}
                className="bg-blue-500 text-white text-xs px-6 m-1 py-1 rounded"
              >
              Ver
              </button>
             </div>
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
      <Modal title="Detalles del proveedor" setShowModal={setShowModalDetails} showModal={showModalDetails}>
          <Details vendor={details} />
      </Modal>
    </>
  );
}
   