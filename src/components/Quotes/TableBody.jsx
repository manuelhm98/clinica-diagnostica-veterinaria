import React from "react";
import TD from "../Global/TD";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";

export default function TableBody({ quotes }) {
  return (
    <>
      {quotes && quotes.length ? 
        quotes.map((quote) => (
          <tr key={quote.id}>
            <TD name={quote.id} />
            <TD
              name={formatRelative(subDays(new Date(quote.date), -1), new Date(), {
                locale: es,
              })}
            />
            <TD name={quote.patients.names} />
            <TD name={quote.state ? "Pendiente" : "Completada"} />
          </tr>
        )) : <p className="text-base font-thin py-3 px-4">No se ah registrado ninguna cita...</p>}
    </>
  );
}
