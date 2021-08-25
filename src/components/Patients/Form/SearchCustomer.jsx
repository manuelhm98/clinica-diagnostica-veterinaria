import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readCustomers } from "../../../redux/actions/customers";
import Pagination from "../../Global/Pagination";
import TH from "../../Global/TH";
import Label from "./Label";

export default function SearchCustomer({
  clientToPet,
  setClientToPet,
  setShowModal,
  isAdded
}) {
  const [search, setSearch] = useState({ name: "", last: "" });
  const [page, setPage] = useState(1)
  const customers = useSelector((state) => state.customer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const searchCustom = () => {
      dispatch(readCustomers(search.name, search.last,page));
    };
    return searchCustom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search,page]);
  const selectCustom = (custom) => {
    setClientToPet(custom);
    setShowModal(false)
  };
  return (
    <div>
      <div className="flex flex-col p-1">
        <Label name="Buscar dueño" />
        <div className="w-full flex mt-1">
          <input
            className="border outline-none rounded text-xs w-6/12 px-2 py-1"
            placeholder="Escribe el nombre del cliente"
            onChange={(e) =>
              setSearch({ ...search, name: e.currentTarget.value })
            }
          />
          <input
            className="border outline-none w-6/12 ml-2 rounded text-xs py-1 px-2 placeholder-opacity-10"
            placeholder="Escribe el Apellido del cliente"
            onChange={(e) =>
              setSearch({ ...search, last: e.currentTarget.value })
            }
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
                      <td className=" p-2 w-72 text-xs  text-gray-600">
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
          <Pagination data={customers} method={setPage} />
        </div>
      </div>
    </div>
  );
}
