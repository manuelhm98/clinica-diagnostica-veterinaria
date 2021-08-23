import { useState } from "react";
import TD from "../Global/TD";
import Modal from "../Global/Modal";
import Form from "./Form";

export default function TableBody({ customers }) {
  const [customer, setCustomer] = useState();
  const [showModal, setShowModal] = useState(false);
  const edit = (customer) => {
    setCustomer(customer);
    setShowModal(true);
  };
  return (
    <>
      {customers?.length >= 1 ? (
        customers?.map((cust) => (
          <tr key={cust.id}>
            <TD name={cust.names} />
            <TD name={cust.lastname} />
            <TD name={cust.cellphone} />
            <TD name={cust.phone} />
            <TD>
              <div className="flex">
                <div className="relative mt-1 ml-3 inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    nameName="toggle"
                    id="toggle"
                    defaultChecked={cust.state}
                    readOnly
                    disabled
                    className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor="toggle"
                    className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
                <span className="text-xs mt-1 font-normal">
                  {cust.state ? "Activo" : "Inactivo"}
                </span>
              </div>
            </TD>
            <TD>
              <div className="flex">
                <button
                  onClick={() => edit(cust)}
                  className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
                >
                  Editar
                </button>
              </div>
            </TD>
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
        title="Actualizar Cliente"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <Form setShowModal={setShowModal} customer={customer} />
      </Modal>
    </>
  );
}
