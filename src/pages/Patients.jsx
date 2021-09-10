import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableContent from "../components/Patients/TableContent";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readPatients } from "../redux/actions/patiences";
import Pagination from "../components/Global/Pagination";
import { Link } from "react-router-dom";
import InputSearch from "../components/Global/InputSearch";
import { readEmployeById } from "../redux/actions/employee";

export default function Patients() {
  //react states logic
  const [name, setName] = useState("");
  const [custom, setCustom] = useState("");
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(false);

  //redux get states
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patient.data);
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  //redux dispatch states
  useEffect(() => {
    setReload(false);
    dispatch(readPatients(page, name, custom, 5));
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, name, custom, reload]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de Pacientes" />
        <div className="grid grid-cols-2 gap-4">
          <InputSearch
            label="Buscar por el nombre de la mascota"
            placeholder="Escribe el nombre de la mascota para buscar..."
            handleChange={(e) => setName(e.currentTarget.value)}
          />
          <InputSearch
            label="Buscar por el dueño de la mascota"
            placeholder="Escribe el nombre del dueño de la mascota para buscar..."
            handleChange={(e) => setCustom(e.currentTarget.value)}
          />
        </div>
        <button className="bg-blue-600 text-white mt-3 px-8 ml-4 float-right text-xs py-1 rounded">
          <Link to="/new-patient">Agregar</Link>
        </button>
        <Table>
          <TableContent
            user={user?.users}
            setReload={setReload}
            patients={patients}
          />
        </Table>
        <Pagination data={patients} method={setPage} />
      </div>
    </Layout>
  );
}
