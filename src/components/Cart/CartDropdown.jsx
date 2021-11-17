import { useState, useEffect } from "react";
import { addSale } from "../../services/sales-history";
import { clearCart, getItems } from "../../utils/cart";
import { Success } from "../Global/Alerts/Success";
import ItemDetails from "./ItemDetails";
import { useDispatch } from "react-redux";
import { newSale } from "../../redux/actions/sale-history";
import Modal from "../Global/Modal";
import { Warning } from "../Global/Alerts/Warning";
import { DateSchema } from "yup";
export default function CartDropdown(props) {
  const { loadCart, setLoadCart, setDropdownPopoverShow,close } = props;
  const dispatch = useDispatch();
  const [items, setItems] = useState();
  const [total, setTotal] = useState();
  const [wayToPay, setWayToPay] = useState();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setItems(getItems());
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
          product: items,
        };
        addSale(data).then((res) => {
          if (res.ok) {
            clearCart();
            setShowModal(false);
            setLoadCart(true);
            dispatch(newSale(items));
            setDropdownPopoverShow(false);
            Success("Se agrego la venta");
            window.location.reload()
          }
        });
      }
      return;
    }
    Warning("Selecciona el metodo de pago");
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
        setShowModal={setShowModal}
        showModal={showModal}
        title="Completar orden"
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
          </select>
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
