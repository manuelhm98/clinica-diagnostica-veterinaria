import React from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";

export default function AddClinicalService() {
  return (
    <Layout>
      <div className="p-8">
        <Title name="Agregar nuevo servicio clinico" />
        <div className="border w-full h-full mt-14">
          <form className="p-8">
            <div className="grid grid-cols-2">
              <div>
                <div className="flex flex-col">
                  <label className="text-gray-500">Observacion</label>
                  <textarea
                    className="border rounded shadow px-3 py-1 mt-2 text-gray-500 outline-none"
                    placeholder="Escribe la observacion..."
                    cols={6}
                    rows={8}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
