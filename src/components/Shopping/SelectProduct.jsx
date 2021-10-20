import React from "react";
import { showImage } from "../../services/product";
import InputSearch from "../Global/InputSearch";
import Pagination from "../Global/Pag";
import Table from "../Global/Table";
import TD from "../Global/TD";
import TH from "../Global/TH";

export default function SelectProduct({
  products,
  species,
  categories,
  brands,
  searchProd,
  setSearchProd,
  setPageProd,
  setShowModalProd,
  setProduct
}) {
  const handleSelect = (p) => {
      setProduct(p)
      setShowModalProd(false)
  };
  return (
    <div>
      <InputSearch
        handleChange={(e) =>
          setSearchProd({ ...searchProd, name: e.currentTarget.value })
        }
        label="Buscar por nombre"
        placeholder="Escribe el nombre del producto para buscar"
      />
      <div className="grid grid-cols-3 mt-3">
        <div className="grid grid-rows-2">
          <label className="text-gray-500 text-xs">Buscar por categoria</label>
          <select
            onChange={(e) =>
              setSearchProd({ ...searchProd, category: e.currentTarget.value })
            }
            defaultValue={"DEFAULT"}
            className="border mr-6 py-1 text-xs px-2 rounded outline-none"
          >
            <option disabled selected value={"DEFAULT"}>
              Selecciona la categoria
            </option>
            {categories &&
              categories?.map((sp) => (
                <option key={sp.id} value={sp.type}>
                  {sp.type}
                </option>
              ))}
          </select>
        </div>
        <div className="grid grid-rows-2">
          <label className="text-gray-500 text-xs">Buscar por especie</label>
          <select
            onChange={(e) =>
              setSearchProd({ ...searchProd, specie: e.currentTarget.value })
            }
            defaultValue={"DEFAULT"}
            className="border mr-6 py-1 text-xs px-2 rounded outline-none"
          >
            <option disabled selected value={"DEFAULT"}>
              Selecciona la especie
            </option>
            {species?.specie &&
              species?.specie.map((sp) => (
                <option key={sp.id} value={sp.type}>
                  {sp.type}
                </option>
              ))}
          </select>
        </div>
        <div className="grid grid-rows-2">
          <label className="text-gray-500 text-xs">Buscar por marca</label>
          <select
            onChange={(e) =>
              setSearchProd({ ...searchProd, brand: e.currentTarget.value })
            }
            defaultValue={"DEFAULT"}
            className="border mr-6 py-1 text-xs px-2 rounded outline-none"
          >
            <option disabled selected value={"DEFAULT"}>
              Selecciona la marca
            </option>
            {brands &&
              brands?.map((b) => (
                <option key={b.id} value={b.brand}>
                  {b.brand}
                </option>
              ))}
          </select>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <TH name="Nombre" />
            <TH name="Imagen" />
            <TH name="Marca" />
            <TH name="Categoria" />
            <TH name="Especie" />
            <TH name="Acciones" />
          </tr>
        </thead>
        <tbody>
          {products?.products &&
            products?.products.map((p) => (
              <tr key={p.id}>
                <TD name={p.name} />
                <TD>
                  <img
                    src={showImage(p.img)}
                    alt="none"
                    className="max-w-16 max-h-16"
                  />
                </TD>
                <TD name={p.brands?.brand} />
                <TD name={p.category?.type} />
                <TD name={p.species?.type} />
                <TD>
                  <button
                    onClick={() => handleSelect(p)}
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
        last={products?.totalpages}
        className="pagination-bar"
        onPageChange={setPageProd}
        totalCount={products?.totalItems}
        currentPage={products?.currentPage}
        pageSize={products?.take}
      />
    </div>
  );
}
