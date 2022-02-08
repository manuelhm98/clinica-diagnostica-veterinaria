import React from "react";

export default function TH({ name }) {
  return (
    <th className="px-3 text-xs py-2 border-b-2 text-left whitespace-nowrap border-gray-200 bg-gray-100 font-semibold text-gray-600 uppercase tracking-wider">
      {name}
    </th>
  );
}
