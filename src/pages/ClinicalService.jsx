import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableContent from "../components/ClinicalService/TableContent";
import InputSearch from "../components/Global/InputSearch";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { readClinicalServices } from "../redux/actions/clinical-service";
import Pagination from "../components/Global/Pagination";

export default function ClinicalService() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState({ patient: "", type: "" });
  const dispatch = useDispatch();
  const clinicalServices = useSelector((state) => state.clinicalService.data);
  useEffect(() => {
    return dispatch(readClinicalServices(page, search.type, search.patient));
  }, [dispatch, page, search]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de servicios clinicos" />
        <div className="grid grid-cols-2 gap-3" style={{ width: "100%" }}>
          <InputSearch
            placeholder="Escribe el nombre del paciente"
            label="Buscar por paciente"
            handleChange={(e) =>
              setSearch({ ...search, patient: e.currentTarget.value })
            }
          />
          <InputSearch
            placeholder="Escribe el nombre del servicio clinico"
            label="Buscar por servicio clinico"
            handleChange={(e) =>
              setSearch({ ...search, type: e.currentTarget.value })
            }
          />
        </div>
        <Link to="/add-clinical-service">
          <button className="bg-blue-600 text-white px-8 mt-4 ml-4 float-right text-xs py-1 rounded">
            Agregar
          </button>
        </Link>
        <Table>
          <TableContent clinicalServices={clinicalServices} />
        </Table>
        <Pagination method={setPage} data={clinicalServices} />
      </div>
    </Layout>
  );
}
