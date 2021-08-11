import {useEffect} from "react";
import { Link } from "react-router-dom";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import { useDispatch,useSelector } from "react-redux";
import { readDoctors } from "../redux/actions/doctors";
import TableContent from "../components/Doctors/TableContent";

export default function Doctors() {
    const dispatch = useDispatch()
    const doctors = useSelector((state)=>state.doctor.data)
    useEffect(() => {
        return dispatch(readDoctors())
    }, [dispatch])
  return (
    <Layout>
      <div className="p-8 ">
        <Title name="Listado de doctores" />
        <div>
          <input
            className="border text-xs py-1 w-72 px-4 rounded"
            placeholder="Escribe el nombre para buscar"
          />
        </div>
        <Link to="/new-doctor">
          <button className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded">
            Agregar
          </button>
        </Link>
        <Table>
            <TableContent doctors={doctors}/>
        </Table>
      </div>
    </Layout>
  );
}
