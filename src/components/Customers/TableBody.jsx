import { useState } from "react";
import TD from "../Global/TD";
import Modal from "../Global/Modal";
import Form from "./Form";
import { checkRole } from "../../utils/checkRole";

export default function TableBody({ customers, user }) {
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
            <TD>
              <span className="text-gray-600 uppercase whitespace-nowrap text-xs">
                {cust.names}
              </span>
            </TD>
            <TD>
              <span className="text-gray-600 uppercase whitespace-nowrap text-xs">
                {cust.lastname}
              </span>
            </TD>
            <TD name={cust.cellphone !== "0" ? cust.cellphone : "N/A"} />
            <TD name={cust.phone !== "0" ? cust.phone : "N/A"} />
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
            {checkRole(user) === 1 && (
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
        title="Actualizar Cliente"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <Form setShowModal={setShowModal} customer={customer} />
      </Modal>
    </>
  );
}
