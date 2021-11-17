import { useState } from "react";
import TD from "../../Global/TD";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";
import Modal from "../../Global/Modal";
import Details from "./Details";
import { Link } from "react-router-dom";

export default function TableBody({ orders }) {
  const [showModal, setShowModal] = useState(false);
  const [order, setOrder] = useState();
  const handleDetails = (or) => {
    setShowModal(true);
    setOrder(or);
  };
  return (
    <>
      {orders &&
        orders?.map((or) => (
          <tr key={or.id}>
            <TD name={or.id} onclick={() => handleDetails(or)} />
            <TD
              name={formatRelative(subDays(new Date(or.date), 0), new Date(), {
                locale: es,
              })}
            />
            <TD name={or.patients?.names} />
            <TD name={or.pay ? "Completado" : "Pendiente"} />
            <TD name={or.wayToPay} />
            <TD>
              <Link to={`/esthetic-details/${or.id}`}>
                <button className="bg-blue-500 text-white rounded px-4 py-1">
                  Ver
                </button>
              </Link>
            </TD>
          </tr>
        ))}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Detalles de la orden"
      >
        <Details order={order} />
      </Modal>
    </>
  );
}
