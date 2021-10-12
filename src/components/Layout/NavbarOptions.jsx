import {
  faBone,
  faChevronDown,
  faChevronUp,
  faClipboardList,
  faHome,
  faPaw,
  faSignOutAlt,
  faStethoscope,
  faUserMd,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newLoggout } from "../../redux/actions/auth";
import { checkRole } from "../../utils/checkRole";
const NavbarOptions = ({ user }) => {
  const [showDpdw, setShowDpdw] = useState(false);
  const [showHistDpdw, setShowHistDpdw] = useState(false);
  const [showEmpDpdw, setShowEmpDpdw] = useState(false);
  const [showDocDpdw, setShowDocDpdw] = useState(false);
  const [showPetDpw, setShowPetDpw] = useState(false);
  const dispatch = useDispatch();
  const router = useHistory();
  const handleLoggout = () => {
    router.replace("/");
    dispatch(newLoggout());
  };

  const handleShowPatients = () => {
    setShowDpdw(!showDpdw);
    setShowHistDpdw(false);
    setShowEmpDpdw(false);
    setShowDocDpdw(false);
    setShowPetDpw(false);
  };

  const handleShowHistorial = () => {
    setShowDpdw(false);
    setShowHistDpdw(!showHistDpdw);
    setShowEmpDpdw(false);
    setShowDocDpdw(false);
    setShowPetDpw(false);
  };

  const handleShowEmpleado = () => {
    setShowDpdw(false);
    setShowHistDpdw(false);
    setShowEmpDpdw(!showEmpDpdw);
    setShowDocDpdw(false);
    setShowPetDpw(false);
  };

  const handleShowDoctors = () => {
    setShowDpdw(false);
    setShowHistDpdw(false);
    setShowEmpDpdw(false);
    setShowDocDpdw(!showDocDpdw);
    setShowPetDpw(false);
  };

  const handleShowPet = () => {
    setShowDpdw(false);
    setShowHistDpdw(false);
    setShowEmpDpdw(false);
    setShowDocDpdw(false);
    setShowPetDpw(!showPetDpw);
  };

  return (
    <div
      style={{ position: "fixed" }}
      className="w-72 h-screen bg-gray-800 shadow flex-col justify-between sm:flex"
    >
      <div className="px-8">
        <p className="text-sm border-b pb-2 mt-6 font-bold text-blue-700">
          Clinica de <span style={{ color: "#5CB119" }}>Diagnostico</span>{" "}
          <span>Veterinario</span>
        </p>
        <ul className="mt-12">
          <li className="flex w-full justify-between cursor-pointer items-center mb-6">
            <div className="flex items-center text-base">
              <Link to="/" className="text-gray-300">
                <span className=" ml-2">
                  {" "}
                  <FontAwesomeIcon icon={faHome} /> Inicio
                </span>
              </Link>
            </div>
          </li>

          <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
            <div className="flex items-center text-base">
              <span onClick={handleShowPatients} className="ml-2 text-gray-300">
                <FontAwesomeIcon icon={faPaw} /> Pacientes
                {showDpdw ? (
                  <FontAwesomeIcon className="ml-3" icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                )}
                <ul
                  className={
                    "transition-all duration-700 text-white px-6 " +
                    (showDpdw ? "block" : "hidden")
                  }
                >
                  {checkRole(user) === 1 && (
                    <>
                      <Link to="/colors">
                        <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                          <span>● Colores</span>
                        </li>
                      </Link>
                      <Link to="/sexes">
                        <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                          <span>● Sexos</span>
                        </li>
                      </Link>
                      <Link to="/pat-type">
                        <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                          <span>● Tipos de paciente</span>
                        </li>
                      </Link>
                      <Link to="/species">
                        <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                          <span>● Especies</span>
                        </li>
                      </Link>
                      <Link to="/breeds">
                        <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                          <span>● Razas</span>
                        </li>
                      </Link>
                    </>
                  )}
                  <Link to="/patients">
                    <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                      <span>● Pacientes</span>
                    </li>
                  </Link>
                </ul>
              </span>
            </div>
          </li>

          <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
            <Link to="/customers">
              <div className="flex items-center">
                <span className="text-base  ml-2">
                  <FontAwesomeIcon icon={faUsers} /> Clientes
                </span>
              </div>
            </Link>
          </li>

          <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
            <div className="flex items-center">
              <span onClick={handleShowHistorial} className="text-base  ml-2">
                <FontAwesomeIcon icon={faClipboardList} /> Historial Clinico{" "}
                {showHistDpdw ? (
                  <FontAwesomeIcon className="ml-3" icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                )}
                <ul
                  className={
                    "transition-all duration-700 mt-1 text-white px-3 " +
                    (showHistDpdw ? "block" : "hidden")
                  }
                >
                  <Link to="/quotes">
                    <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                      <span>● Consultas</span>
                    </li>
                  </Link>
                  {checkRole(user) === 1 && (
                    <>
                      <Link to="/quote-type">
                        <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                          <span>● Tipos de consulta</span>
                        </li>
                      </Link>
                      <Link to="/vaccination-type">
                        <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                          <span>● Tipo de vacunacion</span>
                        </li>
                      </Link>
                      <Link to="/vaccination-dose">
                        <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                          <span>● Dosis de vacunacion</span>
                        </li>
                      </Link>
                      <Link to="/pest-control-type">
                        <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                          <span>● Tipo de control de plagas</span>
                        </li>
                      </Link>
                      <Link to="/deworming-type">
                        <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                          <span>● Tipo de desparacitacion</span>
                        </li>
                      </Link>
                    </>
                  )}
                </ul>
              </span>
            </div>
          </li>
          {checkRole(user) === 1 && (
            <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span onClick={handleShowDoctors} className="text-base  ml-2">
                  <FontAwesomeIcon icon={faUserMd} /> Doctores{" "}
                  {showDocDpdw ? (
                    <FontAwesomeIcon className="ml-3" icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                  )}
                  <ul
                    className={
                      "transition-all duration-700 text-white px-6 " +
                      (showDocDpdw ? "block" : "hidden")
                    }
                  >
                    <Link to="/specialties">
                      <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                        <span>● Especialidades</span>
                      </li>
                    </Link>
                    <Link to="/doctors">
                      <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                        <span>● Doctores</span>
                      </li>
                    </Link>
                  </ul>
                </span>
              </div>
            </li>
          )}
          <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
            <div className="flex items-center">
              <span onClick={handleShowPet} className="text-base  ml-2">
                <FontAwesomeIcon icon={faBone} /> Pet Shop{" "}
                {showPetDpw ? (
                  <FontAwesomeIcon className="ml-3" icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                )}
                <ul
                  className={
                    "transition-all duration-700 text-white px-6 " +
                    (showPetDpw ? "block" : "hidden")
                  }
                >
                  <Link to="/vendors">
                    <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                      <span>● Proveedores</span>
                    </li>
                  </Link>
                  <Link to="/brand">
                    <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                      <span>● Marcas</span>
                    </li>
                  </Link>
                  <Link to="/category">
                    <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                      <span>● Categorias</span>
                    </li>
                  </Link>
                  <Link to="/brand-type">
                    <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                      <span>● Tipos de marcas</span>
                    </li>
                  </Link>
                </ul>
              </span>
            </div>
          </li>
          {checkRole(user) === 1 && (
            <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span onClick={handleShowEmpleado} className="text-base  ml-2">
                  <FontAwesomeIcon icon={faUserTie} /> Empleados
                  {showEmpDpdw ? (
                    <FontAwesomeIcon className="ml-3" icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                  )}
                  <ul
                    className={
                      "transition-all duration-700 text-white px-6 " +
                      (showEmpDpdw ? "block" : "hidden")
                    }
                  >
                    <Link to="/shifts">
                      <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                        <span>● Turnos</span>
                      </li>
                    </Link>
                    <Link to="/roles">
                      <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                        <span>● Roles</span>
                      </li>
                    </Link>
                    <Link to="/employees">
                      <li className="text-gray-300 text-sm py-2 font-normal cursor-pointer">
                        <span>● Empleados</span>
                      </li>
                    </Link>
                  </ul>
                </span>
              </div>
            </li>
          )}
          <li
            onClick={handleLoggout}
            className="flex w-full justify-between text-gray-300 cursor-pointer items-center"
          >
            <div className="flex items-center">
              <span className="text-base  ml-2">
                <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar Sesion
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarOptions;
