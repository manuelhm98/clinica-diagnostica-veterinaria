import { useState } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Form from "./Form";

export default function TableBody({ employees,roles,shifts }) {
  const [show, setShow] = useState(true);
  const [emp, setEmp] = useState();
  const handleEdit = (emp)=>{
    setEmp(emp)
    setShow(true)
  }
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
              <button onClick={()=>handleEdit(emp)} className="px-4 bg-green-500 text-white py-1 rounded">
                Editar
              </button>
            </TD>
          </tr>
        ))}
      <Modal showModal={show} setShowModal={setShow} title="Editar Empleado">
        <Form setShowModal={setShow} roles={roles} shifts={shifts} id={emp?.id} emp={emp} />
      </Modal>
    </>
  );
}
