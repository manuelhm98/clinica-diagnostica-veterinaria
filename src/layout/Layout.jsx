import React from "react";
import NavbarIcons from "../components/Layout/NavbarIcons";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen bg-gray-200 p-8 overflow-hidden">
      <div className="w-full bg-white rounded-xl flex h-full">
        <div className="" style={{ transition: "all .5s ease", width: "60px" }}>
          <NavbarIcons />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
