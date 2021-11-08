import React from "react";
import TD from "../Global/TD";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";
import { Link } from "react-router-dom";

export default function TableBody({ sales }) {
  return (
    <>
      {sales &&
        sales?.map((sale) => (
          <tr key={sale.id}>
            <TD name={sale?.id} />
            <TD
              name={formatRelative(
                subDays(new Date(sale.dateOfSale), 0),
                new Date(),
                {
                  locale: es,
                }
              )}
            />
            <TD name={"$" + Number(sale.totalPrice)} />
            <TD>
              <Link to={`/sale/${sale.id}`}>
                <button className="bg-green-500 text-white text-xs rounded whitespace-nowrap px-4 py-1">
                  Ver Detalles
                </button>
              </Link>
            </TD>
          </tr>
        ))}
    </>
  );
}
