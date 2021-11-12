import { useState } from "react";
import TD from "../Global/TD";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";
import Modal from "../Global/Modal";
import Result from "./Result";

export default function TableBody({ quotes }) {
  const [showModal, setShowModal] = useState(false);
  const [quote, setQuote] = useState();
  const handleResult = (quote) => {
    setQuote(quote);
    setShowModal(true);
  };
  return (
    <>
      {quotes && quotes.length ? (
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
              {quote.state && (
                <button
                  onClick={() => handleResult(quote)}
                  className="bg-blue-500 text-xs font-semibold px-4 py-1 text-white whitespace-nowrap rounded"
                >
                  Ver resultado
                </button>
              )}
            </TD>
          </tr>
        ))
      ) : (
        <p className="text-base font-thin py-3 px-4">
          No se ah registrado ninguna cita...
        </p>
      )}
      <Modal
        title="Resultados"
        setShowModal={setShowModal}
        showModal={showModal}
      >
        <Result quote={quote} />
      </Modal>
    </>
  );
}
