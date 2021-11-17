import React from "react";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";

export default function Details({ order }) {
  return (
    <div>
      <p className="font-semibold">
        Fecha:{" "}
        <span className="text-sm font-normal">
          {order &&
            formatRelative(subDays(new Date(order.date), 0), new Date(), {
              locale: es,
            })}
        </span>
      </p>
      <p className="font-semibold">
        Paciente:{" "}
        <span className="text-sm font-normal">{order?.patients?.names}</span>
      </p>
      <p className="font-semibold">
        Pago:{" "}
        <span className="text-sm font-normal">
          {order?.pay ? "Completado" : "Pendiente"}
        </span>
      </p>
      <p className="font-semibold">
        Forma de pago:{" "}
        <span className="text-sm font-normal">{order?.wayToPay}</span>
      </p>
      <p className="font-semibold">
        Transporte:{" "}
        <span className="text-sm font-normal">
          {order?.transport ? "Adquirido" : "No adquirido"}
        </span>
      </p>
      <p className="font-semibold">
        Caja:{" "}
        <span className="text-sm font-normal">
          {order?.cage ? "Adquirida" : "No adquirida"}
        </span>
      </p>
      <p className="font-semibold">
        Consulta:{" "}
        <span className="text-sm font-normal">
          {order?.transport ? "Adquirida" : "No adquirida"}
        </span>
      </p>
      <p className="font-semibold">
        Descripcion:{" "}
        <span className="text-sm font-normal">{order?.description}</span>
      </p>
    </div>
  );
}
