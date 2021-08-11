import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableContent from "../components/Patients/TableContent";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readPatients } from "../redux/actions/patiences";
import Pagination from "../components/Global/Pagination";
import { Link } from "react-router-dom";

export default function Patients() {
  //react states logic
  const [name, setName] = useState("");
  const [custom, setCustom] = useState("");
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(false);

  //redux get states
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patient.data);

  //redux dispatch states
  useEffect(() => {
    setReload(false);
    dispatch(readPatients(page, name, custom));
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, name, custom, reload]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de Pacientes" />
        <div>
          <input
            className="border text-xs py-1 w-72 px-4 rounded"
            placeholder="Escribe el nombre de la mascota para buscar"
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <input
            className="border text-xs py-1 ml-2 w-72 px-4 rounded"
            placeholder="Escribe el nombre del dueño para buscar"
            onChange={(e) => setCustom(e.currentTarget.value)}
          />
        </div>
        <button className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded">
          <Link to="/new-patient">Agregar</Link>
        </button>
        <Table>
          <TableContent setReload={setReload} patients={patients} />
        </Table>
        <Pagination data={patients} method={setPage} />
      </div>
    </Layout>
  );
}
