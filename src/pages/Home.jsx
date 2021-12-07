import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { Carousel } from "react-carousel-minimal";
import { data, filterEstNow, filterNow } from "../utils/options";
import {
  getEstheticSales,
  getProductSales,
  getServicesSales,
} from "../services/reports";
import { Link } from "react-router-dom";

export default function Home() {
  const [totalSalesProduct, settotalSalesProduct] = useState(0);
  const [totalSalesHospital, setTotalSalesHospital] = useState(0);
  const [totalSalesEstethic, setTotalSalesEstethic] = useState(0);
  const [salesProduct, setSalesProduct] = useState([]);
  const [salesHospital, setSalesHospital] = useState([]);
  const [salesEst, setSalesEst] = useState([]);

  useEffect(() => {
    const getSalesProduct = () => {
      getProductSales(1000).then((res) => {
        if (res.financeProduct) {
          const filter = filterNow(res.financeProduct);
          setSalesProduct(filter);
          const total = filter
            ?.map((sale) => Number(sale.totalPrice))
            .reduce((a, b) => a + b, 0);
          settotalSalesProduct(total);
          return;
        }
        settotalSalesProduct(0);
        setSalesProduct([]);
      });
    };
    return getSalesProduct();
  }, []);

  useEffect(() => {
    const getSalesHospital = () => {
      getServicesSales(1000).then((res) => {
        if (res.financeHospital) {
          const filter = filterNow(res.financeHospital);
          const total = filter
            ?.map((sale) => Number(sale.totalPrice))
            .reduce((a, b) => a + b, 0);
          setSalesHospital(total);
          return;
        }
        setTotalSalesHospital(0);
        setSalesHospital([]);
      });
    };
    return getSalesHospital();
  }, []);

  useEffect(() => {
    const getSalesEstethic = () => {
      getEstheticSales(1000).then((res) => {
        if (res.financePeluqueria) {
          const filter = filterEstNow(res.financePeluqueria);
          setSalesEst(filter);
          const total = filter
            ?.map((sale) => Number(sale.totalPrice))
            .reduce((a, b) => a + b, 0);
          setTotalSalesEstethic(total);
          return;
        }
        setTotalSalesEstethic(0);
        setSalesEst([]);
      });
    };
    return getSalesEstethic();
  }, []);

  const captionStyle = {
    fontSize: "0",
    fontWeight: "bold",
  };
  return (
    <Layout>
      <div className="App">
        <p className="font-thin text-3xl p-4">
          SIEMPRE MEJORANDO LA CALIDAD DE VIDA DE SUS MASCOTAS
        </p>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "10px 10px",
            }}
          >
            <Carousel
              data={data}
              time={10000}
              width="100%"
              height="475px"
              captionStyle={captionStyle}
              radius="10px"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={false}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "450px",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
        <div className="p-10">
          <p className="text-lg font-semibold mb-4">Reportes de finanzas</p>
          <div className="grid grid-cols-3 gap-5">
            <div className="w-full bg-blue-500 rounded shadow p-4">
              <p className="text-white text-xs font-bold">
                Reportes de ventas de productos
              </p>
              <p className="text-white text-sm mt-3 font-semibold">
                Fecha:{" "}
                <span className="font-normal">
                  {new Date().toLocaleDateString()}
                </span>{" "}
              </p>
              <p className="text-white text-sm mt-1 font-semibold">
                Ventas totales:{" "}
                <span className="font-normal">
                  {salesProduct && `${salesProduct?.length}`}
                </span>{" "}
              </p>
              <p className="text-white text-sm mt-1 font-semibold">
                Ingresos totales:{" "}
                <span className="font-normal">
                  {totalSalesProduct && `$${totalSalesProduct}`}
                </span>{" "}
              </p>
              <Link
                to={{
                  pathname: "/reports",
                  query: {
                    type: 1,
                  },
                }}
              >
                <p className="text-white text-xs mt-2 font-bold cursor-pointer">
                  Ver mas...
                </p>
              </Link>
            </div>
            <div className="w-full bg-green-500 rounded shadow p-4">
              <p className="text-white text-xs font-bold">
                Reportes de ventas de estetica
              </p>
              <p className="text-white text-sm mt-3 font-semibold">
                Fecha:{" "}
                <span className="font-normal">
                  {new Date().toLocaleDateString()}
                </span>{" "}
              </p>
              <p className="text-white text-sm mt-1 font-semibold">
                Ventas totales:{" "}
                <span className="font-normal">
                  {salesHospital && `${salesHospital?.length}`}
                </span>{" "}
              </p>
              <p className="text-white text-sm mt-1 font-semibold">
                Ingresos totales:{" "}
                <span className="font-normal">
                  {totalSalesHospital && `$${totalSalesHospital}`}
                </span>{" "}
              </p>
              <Link
                to={{
                  pathname: "/reports",
                  query: {
                    type: 2,
                  },
                }}
              >
                <p className="text-white text-xs mt-2 font-bold cursor-pointer">
                  Ver mas...
                </p>
              </Link>
            </div>
            <div className="w-full bg-yellow-400 rounded shadow p-4">
              <p className="text-white text-xs font-bold">
                Reportes de ventas de servicios
              </p>
              <p className="text-white text-sm mt-3 font-semibold">
                Fecha:{" "}
                <span className="font-normal">
                  {new Date().toLocaleDateString()}
                </span>{" "}
              </p>
              <p className="text-white text-sm mt-1 font-semibold">
                Ventas totales:{" "}
                <span className="font-normal">
                  {salesEst && `${salesEst?.length}`}
                </span>{" "}
              </p>
              <p className="text-white text-sm mt-1 font-semibold">
                Ingresos totales:{" "}
                <span className="font-normal">
                  {totalSalesEstethic && `$${totalSalesEstethic}`}
                </span>{" "}
              </p>
              <Link
                to={{
                  pathname: "/reports",
                  query: {
                    type: 3,
                  },
                }}
              >
                <p className="text-white text-xs mt-2 font-bold cursor-pointer">
                  Ver mas...
                </p>
              </Link>
            </div>
            <div className="w-full bg-red-500 rounded shadow p-4">
              <p className="text-white text-xs font-bold">Total de ingresos</p>
              <p className="text-white text-sm mt-3 font-semibold">
                Fecha:{" "}
                <span className="font-normal">
                  {new Date().toLocaleDateString()}
                </span>{" "}
              </p>
              <p className="text-white text-sm mt-1 font-semibold">
                Ingresos totales:{" "}
                <span className="font-normal">
                  {totalSalesEstethic &&
                    `$${
                      totalSalesEstethic +
                      totalSalesHospital +
                      totalSalesProduct
                    }`}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
