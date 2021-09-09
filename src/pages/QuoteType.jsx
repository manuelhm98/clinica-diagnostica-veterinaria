import { useEffect, useState } from "react";
import Form from "../components/Quotes/QuoteType/Form";
import Layout from "../layout/Layout";
import Modal from "../components/Global/Modal";
import Title from "../components/Global/Title";
import Table from "../components/Global/Table";
import TH from "../components/Global/TH";
import TD from "../components/Global/TD";
import { useSelector, useDispatch } from "react-redux";
import { readQuoteTypes } from "../redux/actions/quote-type";
import { checkRole } from "../utils/checkRole";
import { readEmployeById } from "../redux/actions/employee";

export default function QuoteType() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [qtype, setQtype] = useState();
  const quoteTypes = useSelector((state) => state.quoteType.data);
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);

  useEffect(() => {
    return dispatch(readQuoteTypes());
  }, [dispatch]);
  const handleEdit = (qtype) => {
    setShowEdit(true);
    setQtype(qtype);
  };
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de Tipos de consulta" />
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-8 py-1 rounded"
          >
            Agregar
          </button>
        </div>
        <Table>
          <thead>
            <tr>
              <TH name="ID" />
              <TH name="Nombre" />
              {checkRole(user?.users) === 1 && <TH name="Acciones" />}
            </tr>
          </thead>
          <tbody>
            {quoteTypes &&
              quoteTypes.length &&
              quoteTypes.map((qtype) => (
                <tr key={qtype.id}>
                  <TD name={qtype.id} />
                  <TD name={qtype.type} />
                  {checkRole(user?.users) === 1 && (
                    <TD>
                      <button
                        onClick={() => handleEdit(qtype)}
                        className="bg-green-500 text-white px-4 rounded py-1"
                      >
                        Editar
                      </button>
                    </TD>
                  )}
                </tr>
              ))}
          </tbody>
        </Table>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title="Agregar nuevo tipo de consulta"
        >
          <Form setShowModal={setShowModal} />
        </Modal>
        <Modal
          showModal={showEdit}
          setShowModal={setShowEdit}
          title="Actualizar tipo de consulta"
        >
          <Form setShowModal={setShowEdit} qtype={qtype} />
        </Modal>
      </div>
    </Layout>
  );
}
