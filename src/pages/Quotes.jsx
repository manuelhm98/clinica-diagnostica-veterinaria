import { useEffect, useState, useMemo, useCallback } from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import Table from "../components/Global/Table";
import TableContent from "../components/Quotes/TableContent";
import { useDispatch, useSelector } from "react-redux";
import { readQuotes } from "../redux/actions/quote";
import { Link } from "react-router-dom";
import Pagination from "../components/Global/Pag";
import InputSearch from "../components/Global/InputSearch";
import { Success } from "../components/Global/Alerts/Success";
import { SOCKET_URL } from "../utils/constants";
import io from "socket.io-client";

export default function Quotes() {
  const quotes = useSelector((state) => state.quote.data);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const serverURL = SOCKET_URL;
  const socket = useMemo(
    () =>
      io.connect(serverURL, {
        transports: ["websocket"],
      }),
    [serverURL]
  );
  //when a new quote is added use a useCallback with socket
  const callSocket = useCallback(() => {
    socket.on("reload", () => {
      Success("Se completo una consulta");
      setReload(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  //socket connect with useEffect
  useEffect(() => {
    socket.on("connect", () => {});
  }, [socket]);

  //socket discconect with useEffect
  useEffect(() => {
    socket.on("disconnect", () => {});
  }, [socket]);
  useEffect(() => {
    return callSocket();
  }, [callSocket]);
  useEffect(() => {
    setReload(false);
    return dispatch(readQuotes(page, search));
  }, [dispatch, page, search, reload]);
  const handleChange = (e) => {
    setSearch(e.currentPage.value);
    setPage(1);
  };
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de consultas" />
        <div style={{ width: "80%" }}>
          <InputSearch
            handleChange={(e) => handleChange(e)}
            placeholder="Escribe el nombre del paciente..."
            label="Buscar consultas por paciente"
          />
        </div>
        <button className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded">
          <Link
            to={{
              pathname: "/add-quote",
              query:{
                name:"Daniel"
              },
            }}
          >
            Agregar
          </Link>
        </button>
        <Table>
          <TableContent quotes={quotes.quotes} />
        </Table>
        <Pagination
          last={quotes?.totalpages}
          className="pagination-bar"
          onPageChange={setPage}
          totalCount={quotes?.totalItems}
          currentPage={quotes?.currentPage}
          pageSize={quotes?.take}
        />
      </div>
    </Layout>
  );
}
