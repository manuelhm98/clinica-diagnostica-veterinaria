import React from "react";
import { Link } from "react-router-dom";
import TableContent from "../components/ClinicalService/TableContent";
import InputSearch from "../components/Global/InputSearch";
import Table from "../components/Global/Table";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";

export default function ClinicalService() {
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de servicios clinicos" />
        <div className="grid grid-cols-2 gap-3" style={{ width: "70%" }}>
          <InputSearch
            placeholder="Escribe el nombre del paciente"
            label="Buscar por paciente"
          />
          <InputSearch
            placeholder="Escribe el nombre del servicio clinico"
            label="Buscar por servicio clinico"
          />
        </div>
        <Link to="/add-clinical-service">
          <button className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded">
            Agregar
          </button>
        </Link>
        <Table>
          <TableContent />
        </Table>
      </div>
    </Layout>
  );
}
