import { useState, useEffect } from "react";
import { getEstheticSales } from "../../services/reports";
import { filterEst } from "../../utils/options";
import Modal from "../Global/Modal";
import Table from "../Global/Table";
import TD from "../Global/TD";
import TH from "../Global/TH";
import SaleEstDetails from "./SaleEstDetails";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";

export default function EstheticReport() {
  const [initial, setInitial] = useState();
  const [final, setFinal] = useState();
  const [totalSalesProduct, settotalSalesProduct] = useState(0);
  const [filterSales, setfilterSales] = useState();
  const [estDetails, setEstDetails] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getSalesProduct = () => {
      getEstheticSales(1000).then((res) => {
        if (res.financePeluqueria) {
          if (initial && final) {
            const filter = filterEst(initial, final, res.financePeluqueria);
            setfilterSales(filter);
            const total = filter
              ?.map((sale) => Number(sale.totalPrice))
              .reduce((a, b) => a + b, 0);
            settotalSalesProduct(total);

            return;
          }
        }
        settotalSalesProduct(0);
      });
    };
    return getSalesProduct();
  }, [initial, final]);

  const handledetails = (sale) => {
    setEstDetails(sale);
    setShowModal(true);
  };
  return (
    <div>
      <label className="font-semibold text-xs">Fecha de inicio:</label>
      <input
        className="border rounded ml-2 px-4 text-xs"
        type="date"
        onChange={(e) => setInitial(e.currentTarget.value)}
      />
      <label className="font-semibold ml-8 text-xs">Fecha de fin:</label>
      <input
        className="border rounded ml-2 px-4 text-xs"
        type="date"
        onChange={(e) => setFinal(e.currentTarget.value)}
      />
      <div>
        <Table>
          <thead>
            <tr>
              <TH name="Total" />
              <TH name="Fecha" />
              <TH name="Forma de pago" />
              <TH name="Acciones" />
            </tr>
          </thead>
          <tbody>
            {filterSales &&
              filterSales?.map((sale) => (
                <tr key={sale.id}>
                  <TD name={"$" + Number(sale.totalPrice)} />
                  <TD
                    name={formatRelative(
                      subDays(new Date(sale.date), 0),
                      new Date(),
                      {
                        locale: es,
                      }
                    )}
                  />
                  <TD name={sale.wayToPay} />
                  <TD>
                    <button
                      onClick={() => handledetails(sale)}
                      className="bg-blue-500 text-white rounded px-4 py-1"
                    >
                      Ver
                    </button>
                  </TD>
                </tr>
              ))}
          </tbody>
        </Table>
        <p>
          total: <span>${totalSalesProduct}</span>
        </p>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title="Detalles de la venta"
        >
          <SaleEstDetails sale={estDetails} />
        </Modal>
      </div>
    </div>
  );
}
