import { useState } from "react";
import TD from "../Global/TD";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";
import Modal from "../Global/Modal";
import Details from "./Details";
import { Link } from "react-router-dom";

export default function TableBody({ orderService }) {
  const [showModal, setShowModal] = useState(false);
  const [order, setOrder] = useState();
  const handleDetails = (order) => {
    setOrder(order);
    setShowModal(true);
  };
  return (
    <>
      {orderService?.ordenService?.map((od) => (
        <tr key={od.id}>
          <TD name={od.id} />
          <TD
            name={formatRelative(
              subDays(new Date(od.dateOfSale), 0),
              new Date(),
              {
                locale: es,
              }
            )}
          />
          <TD name={"$" + Number(od.totalPrice)} />
          <TD>
            <Link to={`/order-service-details/${od.id}`}>
              <button
                onClick={() => handleDetails(od)}
                className="bg-blue-500 text-white rounded py-1 px-4 text-xs"
              >
                Ver
              </button>
            </Link>
          </TD>
        </tr>
      ))}
      <Modal
        title="Detalles de la orden"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <Details id={order?.id} />
      </Modal>
    </>
  );
}
