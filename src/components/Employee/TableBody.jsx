import { useState } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import ChangePassword from "./ChangePassword";
import Form from "./Form";

export default function TableBody({ employees, roles, shifts }) {
  const [show, setShow] = useState(false);
  const [showCP, setShowCP] = useState(false);
  const [emp, setEmp] = useState();
  const [id, setId] = useState();
  const handleEdit = (emp) => {
    setEmp(emp);
    setShow(true);
  };

  const handleChangePassword = (id) => {
    setId(id);
    setShowCP(true);
  };
  return (
    <>
      {employees?.users &&
        employees?.users.map((emp) => (
          <tr key={emp.id}>
            <TD name={emp.id} />
            <TD name={emp.names} />
            <TD name={emp.lastnames} />
            <TD name={emp.email} />
            <TD>
              <div className="flex">
                <button
                  onClick={() => handleEdit(emp)}
                  className="px-4 bg-green-500 text-white py-1 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleChangePassword(emp?.id)}
                  className="px-4 bg-red-500 whitespace-nowrap ml-4 text-white py-1 rounded"
                >
                  Cambiar contraseña
                </button>
              </div>
            </TD>
          </tr>
        ))}
      <Modal showModal={show} setShowModal={setShow} title="Editar Empleado">
        <Form
          setShowModal={setShow}
          roles={roles}
          shifts={shifts}
          id={emp?.id}
          emp={emp}
        />
      </Modal>
      <Modal
        showModal={showCP}
        setShowModal={setShowCP}
        title="Cambiar contraseña"
      >
        <ChangePassword id={id} setShowCP={setShowCP} />
      </Modal>
    </>
  );
}
