import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBone,
  faClipboardList,
  faHome,
  faPaw,
  faSignOutAlt,
  faStethoscope,
  faTimes,
  faUserMd,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newLoggout } from "../../redux/actions/auth";

export default function NavbarIcons({ setOpenMenu, openMenu }) {
  const router = useHistory()
  const dispatch = useDispatch();
  const handleLoggout = () => {
    dispatch(newLoggout());
    router.push("/")
  };
  return (
    <div className="bg-blue-600 border-r h-full  rounded-tl-xl rounded-bl-xl">
      <ul>
        <li className="border-b flex justify-center content-center items-center py-3 border-solid">
          {openMenu ? (
            <FontAwesomeIcon
              className="   text-white text-xl cursor-pointer"
              icon={faTimes}
              onClick={() => setOpenMenu(!openMenu)}
            />
          ) : (
            <FontAwesomeIcon
              className="   text-white text-xl cursor-pointer"
              icon={faBars}
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
        </li>
        <Link to="/">
          <li className="border-b text-white flex justify-center content-center items-center py-3 border-solid">
            <FontAwesomeIcon className="text-xl" icon={faHome} />
          </li>
        </Link>
        <Link to="/patients">
          <li className="border-b text-white flex justify-center content-center py-3 items-center border-solid">
            <FontAwesomeIcon className="text-xl" icon={faPaw} />
          </li>
        </Link>
        <Link to="/customers">
          <li className="border-b text-white flex justify-center content-center py-3 items-center border-solid">
            <FontAwesomeIcon className="text-xl" icon={faUsers} />
          </li>
        </Link>
        <Link to="/quotes">
          <li className="border-b text-white flex justify-center content-center py-3 items-center border-solid">
            <FontAwesomeIcon className="text-xl" icon={faClipboardList} />
          </li>
        </Link>
        <Link to="/clinical-service">
          <li className="border-b text-white flex justify-center content-center py-3 items-center border-solid">
            <FontAwesomeIcon className="text-xl" icon={faStethoscope} />
          </li>
        </Link>
        <Link to="/doctors">
          <li className="border-b text-white flex justify-center content-center py-3 items-center border-solid">
            <FontAwesomeIcon className="text-xl" icon={faUserMd} />
          </li>
        </Link>
        <Link to="/">
          <li className="border-b text-white flex justify-center content-center py-3 items-center border-solid">
            <FontAwesomeIcon className="text-xl" icon={faBone} />
          </li>
        </Link>
        <Link to="/employees">
          <li className="border-b text-white flex justify-center content-center py-3 items-center border-solid">
            <FontAwesomeIcon className="text-xl" icon={faUserTie} />
          </li>
        </Link>
        <li
          onClick={handleLoggout}
          className="border-b text-white cursor-pointer flex justify-center content-center py-3 items-center border-solid"
        >
          <FontAwesomeIcon className="text-xl" icon={faSignOutAlt} />
        </li>
      </ul>
    </div>
  );
}
