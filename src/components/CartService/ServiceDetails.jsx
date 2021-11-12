import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServices, removeServiceItem } from "../../utils/services";

export default function ItemDetails(props) {
  const { item, setLoadCart, close } = props;
  const remove = () => {
    removeServiceItem(item, "remove");
    setLoadCart(true);
    const items = getServices();
    if (items?.length === 0) {
      close(false);
    }
  };
  return (
    <div className="flex border mb-4 px-8 py-2">
      <span className="text-xs font-extralight ml-4 mt-4 w-28">
        {item?.name}
      </span>
      <div className="ml-4 float-right mt-4 flex">
        <span className="text-xs font-extralight mr-6">{item?.qt}</span>
        <span className="text-xs w-14">
          ${Number(item?.total_price).toFixed(2)}
        </span>
        <div onClick={remove} className="cursor-pointer">
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </div>
  );
}
