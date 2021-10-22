import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableContent from "../components/Patients/TableContent";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { readPatients } from "../redux/actions/patiences";
import Pagination from "../components/Global/Pag";
import { Link } from "react-router-dom";
import InputSearch from "../components/Global/InputSearch";
import { readEmployeById } from "../redux/actions/employee";

export default function Patients() {
  //react states logic
  const [name, setName] = useState("");
  const [custom, setCustom] = useState("");
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(false);
  const [state, setState] = useState(true);

  //redux get states
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patient.data);
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  //redux dispatch states
  useEffect(() => {
    setReload(false);
    dispatch(readPatients(page, name, custom, 25, state ? 1 : 0));
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, name, custom, reload,state]);
  console.log(patients);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de Pacientes" />
        <div className="grid grid-cols-2 gap-4">
          <InputSearch
            label="Buscar por el nombre de la mascota"
            placeholder="Escribe el nombre de la mascota para buscar..."
            handleChange={(e) => setName(e.currentTarget.value)}
          />
          <InputSearch
            label="Buscar por el dueño de la mascota"
            placeholder="Escribe el nombre del dueño de la mascota para buscar..."
            handleChange={(e) => setCustom(e.currentTarget.value)}
          />
        </div>
        <div>
          <label className="text-xs">Mostrar</label>
          <div className="text-xl font-semibold flex mt-1">
            <div className="relative mt-1 ml-3 inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                nameName="toggle"
                id="toggle"
                defaultChecked={state}
                onChange={() => setState(!state)}
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                for="toggle"
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <span className="text-sm font-normal text-gray-600 mt-1">
              {state ? "Activos" : "Inactivos"}
            </span>
          </div>
        </div>
        <button className="bg-blue-600 text-white mt-3 px-8 ml-4 float-right text-xs py-1 rounded">
          <Link to="/new-patient">Agregar</Link>
        </button>
        <Table>
          <TableContent
            user={user?.users}
            setReload={setReload}
            patients={patients}
          />
        </Table>
        <Pagination
          pageSize={patients?.take}
          currentPage={patients?.currentPage}
          data={patients}
          totalCount={patients?.totalItems}
          last={patients?.totalpages}
          onPageChange={setPage}
        />
      </div>
    </Layout>
  );
}
