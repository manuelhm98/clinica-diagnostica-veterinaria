import {useState} from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Form from "./Form"

export default function TableBody({ doctors }) {
  const [showNodal, setShowNodal] = useState(false);
  const [doc, setDoc] = useState()
  const handleEdit = (doc)=>{
    setShowNodal(true)
    setDoc(doc)
  }
  return (
    <>
      {doctors.doctor &&
        doctors.doctor.map((doc) => (
          <tr key={doc.id}>
            <TD name={doc.users?.names} />
            <TD name={doc.jvpmv} />
            <TD name={doc.cellphone} />
            <TD name={doc.phone} />
            <TD>
              <div className="flex">
                <button onClick={()=>handleEdit(doc)} className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded">
                  Editar
                </button>
              </div>
            </TD>
          </tr>
        ))}
        <Modal showModal={showNodal} setShowModal={setShowNodal} title="Actualizar doctor">
          <Form setShowModal={setShowNodal} id={doc?.id} doctor={doc}/>
        </Modal>
    </>
  );
}
