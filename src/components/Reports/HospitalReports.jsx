import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import { getServicesSales } from "../../services/reports";
import { filterDates, filterNow } from "../../utils/options";
import Modal from "../Global/Modal";
import Table from "../Global/Table";
import TD from "../Global/TD";
import TH from "../Global/TH";
import PDFCLinicalSales from "./PDFReports/PDFCllinicalServices";
import SaleHospDetails from "./SaleHospDetails";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";

export default function HospitalReport() {
  const [initial, setInitial] = useState();
  const [final, setFinal] = useState();
  const [totalSalesProduct, settotalSalesProduct] = useState(0);
  const [filterSales, setfilterSales] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [hospDetails, setHospDetails] = useState();
  const [day, setDay] = useState();

  useEffect(() => {
    const getSalesProduct = () => {
      getServicesSales(1000).then((res) => {
        if (res.financeHospital) {
          if (initial && final) {
            const filter = filterDates(initial, final, res.financeHospital);
            setfilterSales(filter);
            const total = filter
              ?.map((sale) => Number(sale.totalPrice))
              .reduce((a, b) => a + b, 0);
            settotalSalesProduct(total);

            return;
          }
        }
        settotalSalesProduct(0);
        setfilterSales([]);
      });
    };
    return getSalesProduct();
  }, [initial, final]);

  useEffect(() => {
    const getSalesProduct = () => {
      getServicesSales(1000).then((res) => {
        if (res.financeHospital) {
          if (day) {
            const filter = filterNow(res.financeHospital, day);
            setfilterSales(filter);
            const total = filter
              ?.map((sale) => Number(sale.totalPrice))
              .reduce((a, b) => a + b, 0);
            settotalSalesProduct(total);

            return;
          }
        }
        settotalSalesProduct(0);
        setfilterSales([]);
      });
    };
    return getSalesProduct();
  }, [day]);

  useEffect(() => {
    const getSalesProduct = () => {
      getServicesSales(1000).then((res) => {
        if (res.financeHospital) {
          const filter = filterNow(res.financeHospital);
          setfilterSales(filter);
          const total = filter
            ?.map((sale) => Number(sale.totalPrice))
            .reduce((a, b) => a + b, 0);
          settotalSalesProduct(total);
          return;
        }
        settotalSalesProduct(0);
        setfilterSales([]);
      });
    };
    return getSalesProduct();
  }, []);

  const handledetails = (sale) => {
    setHospDetails(sale);
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
        <p>
          total: <span>${totalSalesProduct}</span>
        </p>
        {totalSalesProduct > 0 && (
          <PDFDownloadLink
            document={
              <PDFCLinicalSales
                initial={initial}
                final={final}
                sales={filterSales}
                day={day}
                total={totalSalesProduct}
              />
            }
            fileName={`Reporte-servicios-${Date.now()}.pdf`}
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
          <SaleHospDetails sale={hospDetails} />
        </Modal>
      </div>
    </div>
  );
}
