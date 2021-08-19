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
  const [showServCli, setShowServCli] = useState(false);
  const dispatch = useDispatch();
  const handleLoggout = () => {
    dispatch(newLoggout());
  };

  const handleShowPatients = () => {
    setShowDpdw(!showDpdw);
    setShowHistDpdw(false);
    setShowEmpDpdw(false);
    setShowDocDpdw(false);
    setShowServCli(false);
  };

  const handleShowHistorial = () => {
    setShowDpdw(false);
    setShowHistDpdw(!showHistDpdw);
    setShowEmpDpdw(false);
    setShowDocDpdw(false);
    setShowServCli(false);
  };

  const handleShowEmpleado = () => {
    setShowDpdw(false);
    setShowHistDpdw(false);
    setShowEmpDpdw(!showEmpDpdw);
    setShowDocDpdw(false);
    setShowServCli(false);
  };

  const handleShowDoctors = () => {
    setShowDpdw(false);
    setShowHistDpdw(false);
    setShowEmpDpdw(false);
    setShowServCli(false);
  };

  const handleShowCliServ = () => {
    setShowDpdw(false);
    setShowHistDpdw(false);
    setShowEmpDpdw(false);
    setShowDocDpdw(false);
    setShowServCli(!showServCli);
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
          <span onClick={handleShowPatients} className="text-sm font-bold pt-1">
            Pacientes
            {showDpdw ? (
              <FontAwesomeIcon className="ml-3" icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
            )}
          </span>
          <ul
            className={
              "transition-all duration-700 p-3 text-white px-6 " +
              (showDpdw ? "block" : "hidden")
            }
          >
            <Link to="/colors">
              <li className="text-gray-100 text-sm py-1 font-bold cursor-pointer">
                <span>Colores</span>
              </li>
            </Link>
            <Link to="/sexes">
              <li className="text-gray-100 text-sm mt-3 font-bold cursor-pointer">
                <span>Sexos</span>
              </li>
            </Link>
            <Link to="/pat-type">
              <li className="text-gray-100 text-sm mt-3 font-bold cursor-pointer">
                <span>Tipos de paciente</span>
              </li>
            </Link>
            <Link to="/species">
              <li className="text-gray-100 text-sm mt-3 font-bold cursor-pointer">
                <span>Especies</span>
              </li>
            </Link>
            <Link to="/breeds">
              <li className="text-gray-100 text-sm mt-3 font-bold cursor-pointer">
                <span>Razas</span>
              </li>
            </Link>
            <Link to="/patients">
              <li className="text-gray-100 text-sm mt-3 font-bold cursor-pointer">
                <span>Pacientes</span>
              </li>
            </Link>
          </ul>
        </li>
        <li className=" text-white flex justify-items-center py-3 ml-4 border-solid cursor-pointer">
          <span className="text-sm font-bold">Clientes</span>
        </li>
        <li className=" text-white  flex flex-col justify-items-center py-3 ml-4 border-solid cursor-pointer">
          <span
            onClick={handleShowHistorial}
            className="text-sm font-bold pt-1"
          >
            Historial clinico
            {showHistDpdw ? (
              <FontAwesomeIcon className="ml-3" icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
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
        <li className=" text-white  flex flex-col justify-items-center py-3 ml-4 border-solid cursor-pointer">
          <span onClick={handleShowCliServ} className="text-sm font-bold pt-1">
            Servicios clinicos
            {showServCli ? (
              <FontAwesomeIcon className="ml-3" icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
            )}
          </span>
          <ul
            className={
              "transition-all duration-700 mt-1 text-white px-3 " +
              (showServCli ? "block" : "hidden")
            }
          >
            <Link to="/service-type">
              <li className="text-gray-100 text-sm font-bold py-1 cursor-pointer">
                <span>Tipos de servicio</span>
              </li>
            </Link>
            <Link to="/clinical-service">
              <li className="text-gray-100 mt-3 text-sm font-bold py-1 cursor-pointer">
                <span>Servicios clinicos</span>
              </li>
            </Link>
          </ul>
        </li>
        <li className="text-white  flex flex-col justify-items-center py-3 ml-4 border-solid cursor-pointer">
          <span onClick={handleShowDoctors} className="text-sm font-bold">
            Doctores
            {showDocDpdw ? (
              <FontAwesomeIcon className="ml-3" icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
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
            <Link to="/doctors">
              <li className="text-gray-100 text-sm font-bold py-1 cursor-pointer">
                <span>Doctores</span>
              </li>
            </Link>
          </ul>
        </li>
        <li className=" text-white flex py-3 ml-4 border-solid cursor-pointer">
          <span className="text-sm font-bold">PetShop</span>
        </li>
        <li className=" text-white  flex flex-col justify-items-center py-3 ml-4 border-solid cursor-pointer">
          <span onClick={handleShowEmpleado} className="text-sm font-bold">
            Empleados
            {showEmpDpdw ? (
              <FontAwesomeIcon className="ml-3" icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
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
            <Link to="/employees">
              <li className="text-gray-100 text-sm font-bold py-1 cursor-pointer">
                <span>Empleados</span>
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
