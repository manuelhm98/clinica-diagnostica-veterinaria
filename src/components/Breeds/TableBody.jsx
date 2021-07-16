import React from "react";
import TD from "../Global/TD";

export default function TableBody({breeds}) {
  return (
    <>
    {breeds.map((breed)=>(<tr>
      <TD name={breed.id} />
      <TD name={breed.type} />
      <TD name={breed.species?.type} />
      <TD>
          <div className="flex">
          <button className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded">Editar</button>
          <button className="bg-red-500 text-white text-xs px-6 m-1 py-1 rounded">Eliminar</button>
          </div>
      </TD>
    </tr>))}
    </>
  );
}
