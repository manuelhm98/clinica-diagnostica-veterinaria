import { useState, useEffect } from "react";
import { getProductSales } from "../../services/reports";
import { filterDates } from "../../utils/options";
import Table from "../Global/Table";
import TD from "../Global/TD";
import TH from "../Global/TH";

import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";
import Modal from "../Global/Modal";
import SaleProductDetails from "./SaleProductDetails";

export default function ProductReport() {
  const [initial, setInitial] = useState();
  const [final, setFinal] = useState();
  const [totalSalesProduct, settotalSalesProduct] = useState(0);
  const [filterSales, setfilterSales] = useState();
  const [showModal, setShowModal] = useState(false);
  const [saleDetail, setSaleDetail] = useState();

  useEffect(() => {
    const getSalesProduct = () => {
      getProductSales(1000).then((res) => {
        if (res.financeProduct) {
          if (initial && final) {
            const filter = filterDates(initial, final, res.financeProduct);
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
    setSaleDetail(sale);
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
                      subDays(new Date(sale.dateOfSale), 0),
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
          title="Detalles de venta"
        >
          <SaleProductDetails sale={saleDetail} />
        </Modal>
      </div>
    </div>
  );
}
