import { useState, useEffect } from "react";
import { Success } from "../Global/Alerts/Success";
import ItemDetails from "./ServiceDetails";
import { useDispatch } from "react-redux";
import { clearServices, getServices } from "../../utils/services";
import { addNewOrderService } from "../../services/hospital-service";

export default function ServiceDropdowm(props) {
  const { loadCart, setLoadCart, close } = props;
  const dispatch = useDispatch();
  const [items, setItems] = useState();
  const [total, setTotal] = useState();
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
    if (items) {
      addNewOrderService(items).then((res) => {
        if (res.ok) {
          Success("Se guardo con exito");
          setLoadCart(true);
          close();
          clearServices();
        }
      });
    }
  };
  return (
    <div>
      {items &&
        items?.map((item) => (
          <ItemDetails close={close} setLoadCart={setLoadCart} item={item} />
        ))}
      <p>Total: $ {Number(total).toFixed(2)}</p>
      <button
        onClick={completeSale}
        className="bg-blue-500 text-white text-xs py-1 px-4 rounded mt-2"
      >
        Completar
      </button>
    </div>
  );
}
