import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readResultsByQuote } from "../../redux/actions/result";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";
import { Link } from "react-router-dom";

export default function Result({ quote }) {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result.data);

  useEffect(() => {
    return dispatch(readResultsByQuote(quote?.id));
  }, [quote, dispatch]);
  console.log(quote);

  return (
    <div>
      <p>
        Paciente:{" "}
        <span className="text-sm font-semibold">{quote?.patients?.names}</span>
      </p>
      <p>
        Diagnostico:{" "}
        <span className="text-sm font-semibold">{result?.diagnosis}</span>
      </p>
      <p>
        Sintomatologia:{" "}
        <span className="text-sm font-semibold">{result?.symptomatology}</span>
      </p>
      <p>
        Tratamiento:{" "}
        <span className="text-sm font-semibold">{result?.treatment}</span>
      </p>
      <button className="bg-blue-600 text-white w-full mt-3 px-8 ml-4 float-right text-xs py-1 rounded">
        <Link to="/add-quote">Agregar consulta</Link>
      </button>
    </div>
  );
}
