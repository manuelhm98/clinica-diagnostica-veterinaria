import { useState, useEffect } from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { readEstethicServices } from "../redux/actions/estethic-service";
import EstheticBotton from "../components/CartEsthetic/EstheticButton";
import { setItemEsthetic } from "../utils/esthetic";

export default function AddEstheticService() {
  const [page, setPage] = useState(1);
  const [est, setEsthetic] = useState();
  const [loadCart, setLoadCart] = useState(false);
  const dispatch = useDispatch();
  const estethic = useSelector((state) => state.estethicService.data);
  useEffect(() => {
    return dispatch(readEstethicServices(page));
  }, [dispatch, page]);
  useEffect(() => {
    if (est) {
      let values = {
        id: est?.id,
        qt: 1,
        price: est?.price,
        total_price: est?.price,
        name: est?.name,
      };
      setItemEsthetic(values);
      setEsthetic(undefined);
      setLoadCart(true);
    }
    return;
  }, [est, setLoadCart]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Servicios esteticos disponibles" />
        <EstheticBotton loadCart={loadCart} setLoadCart={setLoadCart} />
        <div className="grid grid-cols-4 gap-4">
          {estethic.aestheticService &&
            estethic?.aestheticService?.map((es) => (
              <div className="shadow flex border rounded-lg">
                <div className="w-6 rounded-l-lg bg-blue-500 h-full"></div>
                <div className="p-3">
                  <p className="text-sm font-semibold">
                    Servicio: <span className="text-xs">{es.name}</span>
                  </p>
                  <p className="text-sm font-semibold mt-2">
                    Precio: <span className="text-xs">${es.price}</span>
                  </p>
                  <p className="text-sm font-semibold mt-2">
                    Tamaño: <span className="text-xs">{es.size}</span>
                  </p>
                  <button
                    onClick={() => setEsthetic(es)}
                    className="bg-blue-500 text-white px-8 my-2 mx-4 rounded text-xs py-1"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
