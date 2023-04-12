import { useState } from "react";
import TD from "../Global/TD";
import Modal from "../Global/Modal";
import Form from "./Form";
import { checkRole } from "../../utils/checkRole";
import { useDispatch } from "react-redux";
import { changePassword, changeState } from "../../services/customers";
import { addCustomer } from "../../redux/actions/customers";
import toast from "react-hot-toast";

export default function TableBody({ customers, user, setState }) {
  const [customer, setCustomer] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showModalP, setShowModalP] = useState(false);
  const [password, setPassword] = useState("1234");
  const edit = (customer) => {
    setCustomer(customer);
    setShowModal(true);
  };

  const handleChangePassword = async()=>{
    const result = await changePassword(password,customer?.id)
    console.log(result)
    if(result.ok){
      toast.success("Se cambio correctamente")
    }else{
      toast.error("Error al cambiar contraseña")
    }
  }

  const dispatch = useDispatch();
  const handlechange = (cust, state) => {
    changeState(cust?.id, state).then(() => {
      dispatch(addCustomer(cust));
      setState(!state);
    });
  };
  return (
    <>
      {customers?.length >= 1 ? (
        customers?.map((cust, index) => (
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
                    name={"toggle" + index}
                    id={"toggle" + index}
                    defaultChecked={cust.state}
                    onChange={() => handlechange(cust, cust.state)}
                    className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor={"toggle" + index}
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
                {checkRole(user) === 1 && (
                  <button
                    onClick={() => edit(cust)}
                    className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
                  >
                    Editar
                  </button>
                )}
                <button
                  onClick={() => {
                    setShowModalP(true);
                    setCustomer(cust);
                  }}
                  className="bg-red-500 text-white text-xs px-6 m-1 py-1 rounded"
                >
                  Cambiar contraseña
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
      <Modal
        title="Cambiar contraseña"
        showModal={showModalP}
        setShowModal={setShowModalP}
      >
        <div className="w-96">
          <label className=" font-semibold">Nueva contraseña</label>
          <input
            className="w-full rounded p-3 border"
            type="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Escribe la nueva contraseña"
            autoComplete="new-password"
          ></input>
          <button onClick={handleChangePassword} className="bg-blue-500 text-white rounded w-full p-3 mt-4">
            Guardar
          </button>
        </div>
      </Modal>
    </>
  );
}
