import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readCustomers } from "../../../redux/actions/customers";
import InputSearch from "../../Global/InputSearch";
import Pagination from "../../Global/Pag";
import TH from "../../Global/TH";

export default function SearchCustomer({
  clientToPet,
  setClientToPet,
  isAdded,
  setShowModal
}) {
  const [search, setSearch] = useState({ name: "", last: "",phone:"" });
  const [page, setPage] = useState(1);
  const customers = useSelector((state) => state.customer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const searchCustom = () => {
      dispatch(readCustomers(search.name, search.last,search.phone, page, 5));
    };
    return searchCustom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page]);
  const selectCustom = (custom) => {
    setClientToPet(custom);
    setShowModal(false)
  };
  return (
    <div>
      <div className="flex flex-col p-1">
        <div className="w-full grid grid-cols-2 gap-5 mt-1">
          <InputSearch
            handleChange={(e) =>
              setSearch({ ...search, name: e.currentTarget.value })
            }
            placeholder="Escribe el nombre para buscar"
            label="Buscar cliente por nombre"
          />
          <InputSearch
            handleChange={(e) =>
              setSearch({ ...search, last: e.currentTarget.value })
            }
            placeholder="Escribe el apellido para buscar"
            label="Buscar cliente por apelllido"
          />
        </div>
        <div>
        <InputSearch
            handleChange={(e) =>
              setSearch({ ...search, phone: e.currentTarget.value })
            }
            placeholder="Escribe el telefono para buscar"
            label="Buscar cliente por telefono"
          />
        </div>
      </div>
      <div className="flex  flex-col p-1 mt-1">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <TH name="Nombre" />
                  <TH name="Direccion" />
                  <TH name="Telefono" />
                  <TH name="Celular" />
                  <TH name="" />
                  <TH name="" />
                </tr>
              </thead>
              <tbody>
                {customers &&
                  customers.customers?.map((custom, index) => (
                    <tr key={index}>
                      <td className=" p-2 w-72 text-xs  text-gray-600 uppercase">
                        {custom.names} {custom.lastname}
                      </td>
                      <td className=" p-2 w-56 px-6 text-xs  text-gray-600">
                        {custom.direction}
                      </td>
                      <td className=" p-2 px-6 text-xs  text-gray-600">
                        {custom.phone !== "0" ? custom.phone : "N/A"}
                      </td>
                      <td className=" p-2 px-6 text-xs text-gray-600">
                        {custom.cellphone !== "0" ? custom.cellphone : "N/A"}
                      </td>
                      <td>
                        {clientToPet && clientToPet?.id === custom.id && (
                          <FontAwesomeIcon
                            className="text-green-500"
                            icon={faCheck}
                          />
                        )}
                      </td>
                      <td className="p-2">
                        <button
                          type="button"
                          onClick={() => selectCustom(custom)}
                          className="bg-blue-500 text-white text-xs  px-3 rounded py-1"
                        >
                          Seleccionar
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <Pagination
            last={customers?.totalpages}
            className="pagination-bar"
            onPageChange={setPage}
            totalCount={customers?.totalItems}
            currentPage={customers?.currentPage}
            pageSize={customers?.take}
          />
        </div>
      </div>
    </div>
  );
}
