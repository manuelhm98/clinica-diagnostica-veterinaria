import {
  faHome,
  faPaw,
  faUserMd,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";import NavbarOptions from "../components/Layout/NavbarOptions";

export default function Layout({ children }) {
  return (
    <div className="flex flex-no-wrap overflow-hidden">
      <NavbarOptions />
      <div className="container ml-72 mx-auto py-10 md:w-4/5 w-11/12 px-6 overflow-auto">
        <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
