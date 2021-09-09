import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

export default function Error404() {
  return (
    <Layout>
      <div className="p-20 flex flex-col justify-center items-center">
        <span className=" text-8xl text-center text-blue-500 font-thin">
          ERROR 404
        </span>
        <p className="mt-6 font-thin text-2xl">
          La pagina a la que estas intentando acceder no fue encontrada
        </p>
        <div className="w-full flex justify-center items-center">
          <Link to="/">
            <button className="bg-blue-500 py-1 px-6 text-white rounded mt-6">
              Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
