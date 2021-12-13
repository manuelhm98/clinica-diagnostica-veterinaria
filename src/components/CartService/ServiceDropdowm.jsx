import { useState, useEffect } from "react";
import { Success } from "../Global/Alerts/Success";
import ItemDetails from "./ServiceDetails";
import { clearServices, getServices } from "../../utils/services";
import { addNewOrderService } from "../../services/hospital-service";
import Modal from "../Global/Modal";
import { Warning } from "../Global/Alerts/Warning";

export default function ServiceDropdowm(props) {
  const { loadCart, setLoadCart, close } = props;
  const [items, setItems] = useState();
  const [total, setTotal] = useState();
  const [wayToPay, setWayToPay] = useState();
  const [showModal, setShowModal] = useState(false);
  const [transport, setTransport] = useState(false);
  const [transportPrice, setTransportPrice] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setItems(getServices());
    setLoadCart(false);
    return;
  }, [loadCart, setLoadCart]);

  useEffect(() => {
    const rdc = items?.length
      ? items
          ?.map((item) => item?.total_price)
          .reduce((a, b) => (a && b ? Number(a) + Number(b) : 0))
      : 0;
    setTotal(rdc);
    return;
  }, [items, loadCart]);
  const completeSale = () => {
    if (wayToPay) {
      if (items) {
        const data = {
          wayToPay,
          price: Number(price),
          transport: Number(transportPrice),
          service: items,
        };
        addNewOrderService(data).then((res) => {
          if (res.ok) {
            Success("Se guardo con exito");
            setShowModal(false);
            setLoadCart(true);
            close();
            clearServices();
            window.location.reload()
          }
        });
      }
      return;
    }
    Warning("Debes seleccionar un metodo de pago");
  };
  return (
    <div>
      {items &&
        items?.map((item) => (
          <ItemDetails close={close} setLoadCart={setLoadCart} item={item} />
        ))}
      <p>Total: $ {Number(total).toFixed(2)}</p>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white text-xs py-1 px-4 rounded mt-2"
      >
        Completar
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Completar la orden"
      >
        <div className="flex flex-col">
          <label>Forma de pago</label>
          <select
            name="wayToPay"
            onChange={(e) => setWayToPay(e.currentTarget.value)}
            defaultValue={"DEFAULT"}
            className={
              "border p-1 text-sm text-gray-500 rounded outline-none hover:border-green-400 "
            }
          >
            <option selected value={"DEFAULT"} disabled>
              Selecciona el metodo de pago
            </option>
            <option value="Efectivo">Efectivo</option>
            <option value="Tarjeta de credito">Tarjeta de credito</option>
            <option value="Donacion">Donacion</option>
          </select>
          <div className={transport ? "flex flex-col" : "hidden"}>
            <label className="text-xs font-semibold text-gray-500">
              Precio del transporte
            </label>
            <input
              name="transport_price"
              onChange={(e) => setTransportPrice(e.currentTarget.value)}
              className={
                "border p-1 text-sm text-gray-500 rounded outline-none hover:border-green-400 "
              }
              placeholder="Escribe el precio total de la donacion"
            />
          </div>
          <div
            className={wayToPay === "Donacion" ? " flex flex-col" : "hidden"}
          >
            <label className="text-xs font-semibold text-gray-500">
              Precio de donacion
            </label>
            <input
              name="price"
              onChange={(e) => setPrice(e.currentTarget.value)}
              className={
                "border p-1 text-sm text-gray-500 rounded outline-none hover:border-green-400 "
              }
              placeholder="Escribe el precio total de la donacion"
            />
          </div>
          <div className="flex items-start mb-6 mt-6">
            <div className="flex items-center h-5">
              <input
                name="transport"
                onChange={() => setTransport(!transport)}
                type="checkbox"
                className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              />
            </div>

            <div class="text-sm ml-3">
              <label
                htmlFor="remember"
                className="font-medium text-sm text-gray-900"
              >
                Adquirio transporte
              </label>
            </div>
          </div>

          <button
            onClick={completeSale}
            className="bg-blue-500 text-white rounded mt-4"
          >
            Guardar
          </button>
        </div>
      </Modal>
    </div>
  );
}
