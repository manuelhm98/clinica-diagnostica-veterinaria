import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newLoggout } from "../../redux/actions/auth";
const NavbarOptions = () => {
  const [showDpdw, setShowDpdw] = useState(false);
  const [showHistDpdw, setShowHistDpdw] = useState(false);
  const [showEmpDpdw, setShowEmpDpdw] = useState(false);
  const [showDocDpdw, setShowDocDpdw] = useState(false);
  const dispatch = useDispatch();
  const handleLoggout = () => {
    dispatch(newLoggout());
  };
  return (
    <>
      <ul className="w-full">
        <Link to="/">
          <li className=" text-white flex items-center py-3 ml-4 border-solid cursor-pointer">
            <span className="text-sm font-bold">CDV</span>
          </li>
        </Link>
        <li className=" text-white flex py-3 ml-4 border-solid cursor-pointer">
          <span className="text-sm font-bold">Inicio</span>
        </li>
        <li className=" text-white  flex flex-col justify-items-center py-3 ml-4 border-solid cursor-pointer">
          <span className="text-sm font-bold pt-1">
            <Link to="/patients">Pacientes</Link>
            {showDpdw ? (
              <FontAwesomeIcon
                onClick={() => setShowDpdw(!showDpdw)}
                className="ml-3"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setShowDpdw(!showDpdw)}
                className="ml-3"
                icon={faChevronDown}
              />
            )}
          </span>
          <ul
            className={
              "transition-all duration-700 p-3 text-white px-6 " +
              (showDpdw ? "block" : "hidden")
            }
          >
            <Link to="/colors">
              <li className="text-gray-100 text-sm font-bold py-1 cursor-pointer">
                <span>Colores</span>
              </li>
            </Link>
            <Link to="/sexes">
              <li className="text-gray-100 text-sm font-bold mt-3 py-1 cursor-pointer">
                <span>Sexos</span>
              </li>
            </Link>
            <Link to="/pat-type">
              <li className="text-gray-100 text-sm font-bold mt-3 py-1 cursor-pointer">
                <span>Tipos de paciente</span>
              </li>
            </Link>
            <Link to="/species">
              <li className="text-gray-100 text-sm font-bold mt-3 py-1 cursor-pointer">
                <span>Especies</span>
              </li>
            </Link>
            <Link to="/breeds">
              <li className="text-gray-100 text-sm font-bold mt-3 py-1 cursor-pointer">
                <span>Razas</span>
              </li>
            </Link>
          </ul>
        </li>
        <li className=" text-white flex justify-items-center py-3 ml-4 border-solid cursor-pointer">
          <span className="text-sm font-bold">Clientes</span>
        </li>
        <li className=" text-white  flex flex-col justify-items-center py-3 ml-4 border-solid cursor-pointer">
          <span className="text-sm font-bold pt-1">
            <Link to="/patients">Historial clinico</Link>
            {showHistDpdw ? (
              <FontAwesomeIcon
                onClick={() => setShowHistDpdw(!showHistDpdw)}
                className="ml-3"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setShowHistDpdw(!showHistDpdw)}
                className="ml-3"
                icon={faChevronDown}
              />
            )}
          </span>
          <ul
            className={
              "transition-all duration-700 mt-1 text-white px-3 " +
              (showHistDpdw ? "block" : "hidden")
            }
          >
            <Link to="/service-type">
              <li className="text-gray-100 text-xs font-bold py-1 cursor-pointer">
                <span>Tipos de servicio</span>
              </li>
            </Link>
            <Link to="/quotes">
              <li className="text-gray-100 mt-3 text-xs font-bold py-1 cursor-pointer">
                <span>Consultas</span>
              </li>
            </Link>
            <Link to="/vaccination-type">
              <li className="text-gray-100 mt-3 text-xs font-bold py-1 cursor-pointer">
                <span>Tipo de vacunacion</span>
              </li>
            </Link>
            <Link to="/vaccination-dose">
              <li className="text-gray-100 mt-3 text-xs font-bold py-1 cursor-pointer">
                <span>Dosis de vacunacion</span>
              </li>
            </Link>
            <Link to="/pest-control-type">
              <li className="text-gray-100 mt-3 text-xs font-bold py-1 cursor-pointer">
                <span>Tipo de control de plagas</span>
              </li>
            </Link>
            <Link to="/deworming-type">
              <li className="text-gray-100 mt-3 text-xs font-bold py-1 cursor-pointer">
                <span>Tipo de desparacitacion</span>
              </li>
            </Link>
          </ul>
        </li>
        <li className="text-white  flex flex-col justify-items-center py-3 ml-4 border-solid cursor-pointer">
          <span className="text-sm font-bold">
            <Link to="/doctors">Doctores</Link>
            {showDocDpdw ? (
              <FontAwesomeIcon
                onClick={() => setShowDocDpdw(!showDocDpdw)}
                className="ml-3"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setShowDocDpdw(!showDocDpdw)}
                className="ml-3"
                icon={faChevronDown}
              />
            )}
          </span>
          <ul
            className={
              "transition-all duration-700 text-white px-6 " +
              (showDocDpdw ? "block" : "hidden")
            }
          >
            <Link to="/specialties">
              <li className="text-gray-100 text-sm font-bold py-1 cursor-pointer">
                <span>Especialidades</span>
              </li>
            </Link>
          </ul>
        </li>
        <li className=" text-white flex py-3 ml-4 border-solid cursor-pointer">
          <span className="text-sm font-bold">PetShop</span>
        </li>
        <li className=" text-white  flex flex-col justify-items-center py-3 ml-4 border-solid cursor-pointer">
          <span className="text-sm font-bold">
            <Link to="/employees">Empleados</Link>
            {showEmpDpdw ? (
              <FontAwesomeIcon
                onClick={() => setShowEmpDpdw(!showEmpDpdw)}
                className="ml-3"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setShowEmpDpdw(!showEmpDpdw)}
                className="ml-3"
                icon={faChevronDown}
              />
            )}
          </span>
          <ul
            className={
              "transition-all duration-700 text-white px-6 " +
              (showEmpDpdw ? "block" : "hidden")
            }
          >
            <Link to="/shifts">
              <li className="text-gray-100 text-sm font-bold py-1 cursor-pointer">
                <span>Turnos</span>
              </li>
            </Link>
            <Link to="/roles">
              <li className="text-gray-100 text-sm font-bold py-1 cursor-pointer">
                <span>Roles</span>
              </li>
            </Link>
          </ul>
        </li>
        <li className=" text-white flex py-3 ml-4 border-solid cursor-pointer">
          <span onClick={handleLoggout} className="text-sm font-bold mt-1">
            Cerrar Sesion
          </span>
        </li>
      </ul>
    </>
  );
};

export default NavbarOptions;
