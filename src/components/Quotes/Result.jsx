import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readResultsByQuote } from "../../redux/actions/result";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";

export default function Result({ quote }) {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result.data);

  useEffect(() => {
    return dispatch(readResultsByQuote(quote?.id));
  }, [quote, dispatch]);
  console.log(result);

  return (
    <div>
      <p>
        Fecha:{" "}
        <span className="text-sm font-semibold mt-4">
          {formatRelative(subDays(new Date(result?.date), 0), new Date(), {
            locale: es,
          })}
        </span>
      </p>
      <p>Diagnostico: {" "}
        <span className="text-sm font-semibold">{result.diagnosis}</span>
      </p>
      <p>Sintomatologia: {" "}
        <span className="text-sm font-semibold">{result?.symptomatology}</span>
      </p>
      <p>Tratamiento: {" "}
        <span className="text-sm font-semibold">{result?.treatment}</span>
      </p>
    </div>
  );
}
