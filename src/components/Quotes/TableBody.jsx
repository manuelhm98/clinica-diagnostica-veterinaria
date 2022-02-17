import { useState, useEffect } from "react";
import TD from "../Global/TD";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";
import Modal from "../Global/Modal";
import Result from "./Result";
import EditForm from "./EditForm";
import { readDoctors } from "../../redux/actions/doctors";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorID } from "../../services/doctor";

export default function TableBody({ quotes }) {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [quote, setQuote] = useState();
  const [doctor, setDoctor] = useState();
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.data);
  useEffect(() => {
    dispatch(readDoctors(page, search));
    return;
  }, [dispatch, search,page]);

  const handleResult = (quote) => {
    setQuote(quote);
    setShowModal(true);
  };
  const handleEdit = async (quote) => {
    await getDoctorID(quote?.doctorsId).then((res) => {
      setDoctor(res.doctors);
    });
    setQuote(quote);
    setShowModalEdit(true);
  };
  return (
    <>
      {typeof quotes === "undefined" && (
        <tr>
          <td>
            <span className="px-8 py-6 text-xs font-semibold">
              No hay consultas disponibles
            </span>
          </td>
        </tr>
      )}
      {quotes &&
        quotes.length &&
        quotes.map((quote) => (
          <tr key={quote.id}>
            <TD name={quote.id} />
            <TD
              name={formatRelative(
                subDays(new Date(quote.date), 0),
                new Date(),
                {
                  locale: es,
                }
              )}
            />
            <TD name={quote.patients.names} />
            <TD name={quote.state ? "Completada" : "Pendiente"} />
            <TD>
              <>
                {quote.state && (
                  <button
                    onClick={() => handleResult(quote)}
                    className="bg-blue-500 text-xs font-semibold px-4 py-1 text-white whitespace-nowrap rounded"
                  >
                    Ver resultado
                  </button>
                )}
                {!quote.state && (
                  <button
                    onClick={() => handleEdit(quote)}
                    className="bg-green-500 text-white text-xs px-4 py-1 font-semibold rounded"
                  >
                    Editar
                  </button>
                )}
              </>
            </TD>
          </tr>
        ))}
      <Modal
        title="Resultados"
        setShowModal={setShowModal}
        showModal={showModal}
      >
        <Result quote={quote} />
      </Modal>
      <Modal
        title="Editar consulta"
        setShowModal={setShowModalEdit}
        showModal={showModalEdit}
      >
        <EditForm
          doctors={doctors}
          setSearch={setSearch}
          doctor={doctor}
          setShowModal={setShowModalEdit}
          quote={quote}
          setPage={setPage}
        />
      </Modal>
    </>
  );
}
