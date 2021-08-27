import { useEffect, useState } from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import Table from "../components/Global/Table";
import TableContent from "../components/Quotes/TableContent";
import { useDispatch, useSelector } from "react-redux";
import { readQuotes } from "../redux/actions/quote";
import { Link } from "react-router-dom";
import Pagination from "../components/Global/Pagination";
import InputSearch from "../components/Global/InputSearch";

export default function Quotes() {
  const quotes = useSelector((state) => state.quote.data);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(readQuotes(page, search));
  }, [dispatch, page, search]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de consultas" />
        <div style={{ width: "80%" }}>
          <InputSearch
            handleChange={(e) => setSearch(e.currentTarget.value)}
            placeholder="Escribe el nombre del paciente..."
            label="Buscar consultas por paciente"
          />
        </div>
        <button className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded">
          <Link to="/add-quote">Agregar</Link>
        </button>
        <Table>
          <TableContent quotes={quotes.quotes} />
        </Table>
        <Pagination data={quotes} method={setPage} />
      </div>
    </Layout>
  );
}
