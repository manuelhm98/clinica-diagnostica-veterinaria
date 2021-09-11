import React from "react";
import TD from "../Global/TD";

export default function TableBody({ shifts }) {
  return (
    <>
      {shifts &&
        shifts.map((shift) => (
          <tr key={shift.id}>
            <TD name={shift.id} />
            <TD name={shift.type} />
          </tr>
        ))}
    </>
  );
}
