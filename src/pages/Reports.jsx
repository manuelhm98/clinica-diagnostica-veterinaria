import { useState } from "react";
import { useLocation } from "react-router";
import EstheticReport from "../components/Reports/EstheticReports";
import HospitalReport from "../components/Reports/HospitalReports";
import ProductReport from "../components/Reports/ProductReport";
import Layout from "../layout/Layout";

export default function Reports() {
  const { query } = useLocation();
  const [showSalesProduct, setShowSalesProduct] = useState(
    query?.type ? (Number(query?.type) === 1 ? true : false) : true
  );
  const [showSalesHospital, setShowSalesHospital] = useState(
    Number(query?.type) === 2 ? true : false
  );
  const [showSalesEsthetic, setShowSalesEsthetic] = useState(
    Number(query?.type) === 3 ? true : false
  );

  const handleshowproduct = () => {
    setShowSalesProduct(true);
    setShowSalesHospital(false);
    setShowSalesEsthetic(false);
  };
  const handleshowesthetic = () => {
    setShowSalesProduct(false);
    setShowSalesEsthetic(true);
    setShowSalesHospital(false);
  };
  const handleshowservices = () => {
    setShowSalesProduct(false);
    setShowSalesEsthetic(false);
    setShowSalesHospital(true);
  };

  return (
    <Layout>
      <div className="m-10">
        <nav className="bg-grey-light p-3 rounded font-sans w-full m-4 mt-16">
          <ol className="list-reset flex text-grey-dark">
            <li onClick={handleshowproduct} className="cursor-pointer">
              <span
                className={
                  "text-blue-500 text-base font-thin" +
                  (showSalesProduct ? " font-semibold" : " sm:font-thin")
                }
              >
                Venta de productos
              </span>
            </li>
            <li>
              <span className="mx-4">/</span>
            </li>
            <li onClick={handleshowesthetic} className="cursor-pointer">
              <span
                className={
                  "text-blue-500 text-base " +
                  (showSalesEsthetic ? " font-semibold" : " sm:font-thin")
                }
              >
                Venta de servicios esteticos
              </span>
            </li>
            <li>
              <span className="mx-4">/</span>
            </li>
            <li onClick={handleshowservices} className="cursor-pointer">
              <span
                className={
                  "text-blue-500 text-base " +
                  (showSalesHospital ? " font-semibold" : " sm:font-thin")
                }
              >
                Venta de servicios clinicos
              </span>
            </li>
          </ol>
        </nav>
        {showSalesProduct && <ProductReport />}
        {showSalesHospital && <HospitalReport />}
        {showSalesEsthetic && <EstheticReport/>}
      </div>
    </Layout>
  );
}
