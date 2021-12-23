import { useState, useEffect } from "react";
import { getProductSales } from "../../services/reports";
import { filterDates, filterNow } from "../../utils/options";
import Table from "../Global/Table";
import TD from "../Global/TD";
import TH from "../Global/TH";

import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";
import Modal from "../Global/Modal";
import SaleProductDetails from "./SaleProductDetails";
import PDFProductSales from "./PDFReports/PDFProductSales";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function ProductReport() {
  const [initial, setInitial] = useState();
  const [final, setFinal] = useState();
  const [day, setDay] = useState();
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
        setfilterSales([])
      });
    };
    return getSalesProduct();
  }, [initial, final]);

  useEffect(() => {
    const getSales = () => {
      getProductSales(1000).then((res) => {
        if (res.financeProduct) {
          if (day) {
            const filter = filterNow(res.financeProduct, day);
            console.log(filter);
            setfilterSales(filter);
            const total = filter
              ?.map((sale) => Number(sale.totalPrice))
              .reduce((a, b) => a + b, 0);
            settotalSalesProduct(total);
            return
          }
        }
        settotalSalesProduct(0);
        setfilterSales([])
      });
    };
    return getSales();
  }, [day]);
  useEffect(() => {
    const getSales = () => {
      getProductSales(1000).then((res) => {
        if (res.financeProduct) {
          const filter = filterNow(res.financeProduct);
          console.log(filter, new Date());
          setfilterSales(filter);
          const total = filter
            ?.map((sale) => Number(sale.totalPrice))
            .reduce((a, b) => a + b, 0);
          settotalSalesProduct(total);
          return
        }
        settotalSalesProduct(0);
        setfilterSales([])
      });
    };
    return getSales();
  }, []);

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
      <label className="font-semibold ml-12 text-xs">Filtrar por dia:</label>
      <input
        className="border rounded ml-2 px-4 text-xs"
        type="date"
        onChange={(e) => setDay(e.currentTarget.value)}
      />
      <div>
        <Table>
          <thead>
            <tr>
              <TH name="Total" />
              <TH name="Fecha" />
              <TH name="Forma de pago" />
              <TH name="Vendido por" />
              <TH name="Acciones" />
            </tr>
          </thead>
          <tbody>
            {typeof filterSales === "undefined" && (
              <tr>
                <p className="p-4">Cargando resultados...</p>
              </tr>
            )}
            {filterSales && filterSales?.length === 0 ? (
              <tr>
                <p className="p-4">No hay ventas para mostrar...</p>
              </tr>
            ) : (
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
                  <TD name={sale.users?.names} />
                  <TD>
                    <button
                      onClick={() => handledetails(sale)}
                      className="bg-blue-500 text-white rounded px-4 py-1"
                    >
                      Ver
                    </button>
                  </TD>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <p className="mb-6">
          total: <span>${totalSalesProduct}</span>
        </p>
        {totalSalesProduct > 0 && (
          <PDFDownloadLink
            document={
              <PDFProductSales
                date={day}
                initial={initial}
                final={final}
                sales={filterSales}
                total={totalSalesProduct}
              />
            }
            fileName={`Reporte-productos-${Date.now()}.pdf`}
            style={{
              textDecoration: "none",
              marginTop: 20,
              padding: "5px",
              fontWeight: 400,
              borderRadius: 5,
              color: "#fff",
              backgroundColor: "#3b82f6",
              fontSize: 12,
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            {() => "Descargar Pdf"}
          </PDFDownloadLink>
        )}
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
