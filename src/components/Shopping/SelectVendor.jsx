import React from "react";
import InputSearch from "../Global/InputSearch";
import Pagination from "../Global/Pag";
import Table from "../Global/Table";
import TD from "../Global/TD";
import TH from "../Global/TH";

export default function SelectVendor({
  vendors,
  setSearchVendor,
  searchVendor,
  setPageVendor,
  setVendor,
  setShowModalVendor,
}) {
  const handleSelect = (v) => {
    setVendor(v);
    setShowModalVendor(false);
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <InputSearch
          handleChange={(e) =>
            setSearchVendor({ ...searchVendor, name: e.currentTarget.value })
          }
          label="Buscar por nombre"
          placeholder="Escribe el nombre......."
        />
        <InputSearch
          handleChange={(e) =>
            setSearchVendor({ ...searchVendor, vendor: e.currentTarget.value })
          }
          label="Buscar por nombre de vendedor"
          placeholder="Escribe el nombre de vendedor......."
        />
      </div>
      <Table>
        <thead>
          <tr>
            <TH name="Nombre" />
            <TH name="Nombre de vendedor" />
            <TH name="N° de banco" />
            <TH name="Acciones" />
          </tr>
        </thead>
        <tbody>
          {vendors?.vendors &&
            vendors?.vendors.map((v) => (
              <tr key={v.id}>
                <TD name={v.name} />
                <TD name={v.nameVendor} />
                <TD name={v.nBank} />
                <TD>
                  <button
                    onClick={() => handleSelect(v)}
                    className="bg-green-500 py-1 text-xs text-white rounded px-4"
                  >
                    Seleccionar
                  </button>
                </TD>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination
        last={vendors?.totalpages}
        className="pagination-bar"
        onPageChange={setPageVendor}
        totalCount={vendors?.totalItems}
        currentPage={vendors?.currentPage}
        pageSize={vendors?.take}
      />
    </div>
  );
}
