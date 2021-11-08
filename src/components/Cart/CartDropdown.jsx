import { useState, useEffect } from "react";
import { addSale } from "../../services/sales-history";
import { clearCart, getItems } from "../../utils/cart";
import { Success } from "../Global/Alerts/Success";
import ItemDetails from "./ItemDetails";
import {useDispatch } from "react-redux"
import { newSale } from "../../redux/actions/sale-history";
export default function CartDropdown(props) {
  const { loadCart, setLoadCart,setDropdownPopoverShow } = props;
  const dispatch = useDispatch()
  const [items, setItems] = useState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setItems(getItems());
    setLoadCart(false);
    return;
  }, [loadCart, setLoadCart]);

  useEffect(() => {
    const rdc = items?.length
      ? items?.map((item) => item?.price).reduce((a, b) => (a && b ? Number(a) + Number(b) : 0))
      : 0;
    setTotal(rdc);
    return;
  }, [items, loadCart]);
  const completeSale = ()=>{
    if(items){
      addSale(items).then(res=>{
        if(res.ok){
          clearCart();
          setLoadCart(true)
          dispatch(newSale(items))
          setDropdownPopoverShow(false)
          Success("Se agrego la venta")
        }
      })
    }
  }
  return (
    <div>
      {items &&
        items?.map((item) => (
          <ItemDetails setLoadCart={setLoadCart} item={item} />
        ))}
        <p>Total: $ {Number(total).toFixed(2)}</p>
        <button onClick={completeSale} className="bg-blue-500 text-white text-xs py-1 px-4 rounded mt-2">Completar</button>
    </div>
  );
}
