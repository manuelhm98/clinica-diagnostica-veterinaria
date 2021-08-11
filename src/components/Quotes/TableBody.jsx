import React from "react";
import TD from "../Global/TD";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";

export default function TableBody({ quotes }) {
  return (
    <>
      {quotes &&
        quotes.map((quote) => (
          <tr key={quote.id}>
            <TD name={quote.id} />
            <TD
              name={formatRelative(subDays(new Date(), 3), new Date(), {
                locale: es,
              })}
            />
            <TD name={quote.patients.names} />
            <TD>
              <div className="flex">
                <button className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded">
                  Editar
                </button>
              </div>
            </TD>
          </tr>
        ))}
    </>
  );
}