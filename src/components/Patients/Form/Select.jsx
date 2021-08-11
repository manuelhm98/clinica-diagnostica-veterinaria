import React from "react";

export default function Select({ onchange, aditionalClass, name, children,defaultValue }) {
  return (
    <select
      defaultValue={defaultValue}
      className={
        "border text-gray-600  py-1 px-1 rounded hover:border-green-400 outline-none " +
        aditionalClass
      }
      onChange={onchange}
      name={name}
    >
      {children}
    </select>
  );
}
