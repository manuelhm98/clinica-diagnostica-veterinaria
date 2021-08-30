import React from "react";
import TD from "../Global/TD";

export default function TableBody({ clinicalServices }) {
  return (
    <>
      {clinicalServices?.clinicalService &&
      clinicalServices?.clinicalService.length ? (
        clinicalServices.clinicalService.map((clserv) => (
          <tr key={clserv.id}>
            <TD name={clserv.id} />
            <TD name={clserv.patients?.names} />
            <TD name={clserv.clinicalServicesType?.type} />
          </tr>
        ))
      ) : (
        <p className="text-base font-thin py-3 px-4">
          No se an registrado servicios clinicos...
        </p>
      )}
    </>
  );
}
