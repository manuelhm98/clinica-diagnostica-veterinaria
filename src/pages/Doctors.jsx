import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { readDoctors } from "../redux/actions/doctors";
import TableContent from "../components/Doctors/TableContent";
import Pagination from "../components/Global/Pagination";
import InputSearch from "../components/Global/InputSearch";

export default function Doctors() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.data);
  useEffect(() => {
    return dispatch(readDoctors(page, search));
  }, [dispatch, page, search]);
  return (
    <Layout>
      <div className="p-8 ">
        <Title name="Listado de doctores" />
        <div style={{ width: "70%" }}>
          <InputSearch
            label="Buscar por el nombre ddel doctor"
            placeholder="Escribe el nombre del doctor....."
            handleChange={(e) => setSearch(e.currentTarget.value)}
          />
        </div>
        <Link to="/new-doctor">
          <button className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded">
            Agregar
          </button>
        </Link>
        <Table>
          <TableContent doctors={doctors} />
        </Table>
        <Pagination data={doctors} method={setPage} />
      </div>
    </Layout>
  );
}
