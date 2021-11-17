import { useState, useEffect } from "react";
import EstheticDetails from "./EstethicDetails";
import { getEsthetic } from "../../utils/esthetic";
import { Link } from "react-router-dom";

export default function EstheticDropdowm(props) {
  const { loadCart, setLoadCart, close } = props;
  const [items, setItems] = useState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setItems(getEsthetic());
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
  return (
    <div>
      {items &&
        items?.map((item) => (
          <EstheticDetails
            close={close}
            setLoadCart={setLoadCart}
            item={item}
          />
        ))}
      <p>Total: $ {Number(total).toFixed(2)}</p>
      <Link to="/complete-esthetic">
        <button className="bg-blue-500 text-white text-xs py-1 px-4 rounded mt-2">
          Completar
        </button>
      </Link>
    </div>
  );
}
