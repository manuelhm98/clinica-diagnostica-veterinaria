import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dogs from "../../assets/icons/dogs.svg";
import CatDog from "../../assets/icons/cat-dog.svg";
import Home from "../../assets/icons/casa.svg";
import Colors from "../../assets/icons/colors.svg";
import Sexes from "../../assets/icons/sexes.svg";
import PatType from "../../assets/icons/pat-type.svg"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function NavbarIcons() {
  return (
    <div className="bg-blue-600 h-full  rounded-tl-xl rounded-bl-xl">
      <ul>
        <li className="p-5 border-b border-solid">
          <FontAwesomeIcon
            className="text-white text-xl cursor-pointer"
            icon={faBars}
          />
        </li>
        <Link to="/">
          <li className="border-b flex justify-center content-center items-center py-2 border-solid">
            <img src={Home} style={{ width: "1.5rem" }} alt="x" />
          </li>
        </Link>
        <Link to="/breeds">
        <li className="border-b flex justify-center content-center items-center py-2 border-solid">
            <img src={Dogs} style={{ width: "1.5rem" }} alt="x" />
          </li>
        </Link>
        <Link to="/species">
        <li className="border-b flex justify-center content-center items-center py-2 border-solid">
            <img src={CatDog} style={{ width: "1.8rem" }} alt="x" />
          </li>
        </Link>
        <Link to="/colors">
        <li className="border-b flex justify-center content-center items-center py-2 border-solid">
            <img src={Colors} style={{ width: "1.5rem" }} alt="x" />
          </li>
        </Link>
        <Link to="/sexes">
        <li className="border-b flex justify-center content-center items-center py-2 border-solid">
            <img src={Sexes} style={{ width: "1.5rem" }} alt="x" />
          </li>
        </Link>
        <Link to="/pat-type">
        <li className="border-b flex justify-center content-center items-center border-solid">
            <img src={PatType} style={{ width: "2.5rem" }} alt="x" />
          </li>
        </Link>
      </ul>
    </div>
  );
}
