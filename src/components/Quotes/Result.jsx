import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readResultsByQuote } from "../../redux/actions/result";
import { Link } from "react-router-dom";
import { getDoctorID } from "../../services/doctor";

export default function Result({ quote }) {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result.data);
  const [doctor, setDoctor] = useState();
  console.log(quote);
  useEffect(() => {
    return dispatch(readResultsByQuote(quote?.id));
  }, [quote, dispatch]);

  useEffect(() => {
    const getDoctor = () => {
      getDoctorID(quote?.doctorsId).then((res) => {
        setDoctor(res?.doctors);
      });
    };
    return getDoctor();
  }, [quote]);

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
      <p>
        Proxima Cita:{" "}
        <span className="text-sm font-semibold">{result?.nexQuote}</span>
      </p>
      {result?.nexQuote !== "0" && (
        <button className="bg-blue-600 text-white w-full mt-3 px-8 ml-4 float-right text-xs py-1 rounded">
          <Link
            to={{
              pathname: "/add-quote",
              query: {
                quote,
                doctor,
                next: result?.nexQuote,
              },
            }}
          >
            Agregar consulta
          </Link>
        </button>
      )}
    </div>
  );
}
