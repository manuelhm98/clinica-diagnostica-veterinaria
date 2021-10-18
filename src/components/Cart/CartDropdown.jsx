import { useState, useEffect } from "react";
import { getItems } from "../../utils/cart";
import ItemDetails from "./ItemDetails";

export default function CartDropdown(props) {
  const { loadCart, setLoadCart } = props;
  const [items, setItems] = useState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setItems(getItems());
    setLoadCart(false);
    return;
  }, [loadCart, setLoadCart]);

  useEffect(() => {
    const rdc = items?.length
      ? items?.map((item) => item?.price).reduce((a, b) => (a && b ? a + b : 0))
      : 0;
    setTotal(rdc);
    return;
  }, [items, loadCart]);
  return (
    <div>
      {items &&
        items?.map((item) => (
          <ItemDetails setLoadCart={setLoadCart} item={item} />
        ))}
        <p>Total: $ {total}</p>
    </div>
  );
}
