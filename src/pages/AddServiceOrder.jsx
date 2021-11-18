import { useState, useEffect } from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { readHospitalServices } from "../redux/actions/hospital-services";
import ServiceButton from "../components/CartService/ServiceButton";
import { setItemService } from "../utils/services";
import Pagination from "../components/Global/Pag";

export default function AddOrderService() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.hospitalService.data);
  const [page, setPage] = useState(1);
  const [service, setService] = useState();
  const [loadCart, setLoadCart] = useState(false);
  useEffect(() => {
    return dispatch(readHospitalServices(page));
  }, [dispatch, page]);
  useEffect(() => {
    if (service) {
      let values = {
        id: service?.id,
        qt: 1,
        price: service?.price,
        total_price: service?.price,
        name: service?.name,
      };
      setItemService(values);
      setService(undefined);
      setLoadCart(true);
    }
    return;
  }, [service, setLoadCart]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Servicios clinicos disponibles" />
        <ServiceButton loadCart={loadCart} setLoadCart={setLoadCart} />
        <div className="mt-4 grid grid-cols-4 gap-4">
          {services?.hospitalService?.map((ser) => (
            <div className="shadow flex border rounded-lg">
              <div className="w-6 rounded-l-lg bg-blue-500 h-full"></div>
              <div className="p-3">
                <p className="text-sm font-semibold">
                  Servicio: <span className="text-xs">{ser.name}</span>
                </p>
                <p className="text-sm font-semibold mt-2">
                  Precio: <span className="text-xs">${ser.price}</span>
                </p>
                <button
                  onClick={() => setService(ser)}
                  className="bg-blue-500 text-white px-8 my-2 mx-4 rounded text-xs py-1"
                >
                  Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          last={services?.totalpages}
          className="pagination-bar"
          onPageChange={setPage}
          totalCount={services?.totalItems}
          currentPage={services?.currentPage}
          pageSize={services?.take}
        />
      </div>
    </Layout>
  );
}
