import { useRef, useState, useEffect } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import {
  getEstheticSales,
  getProductSales,
  getServicesSales,
} from "../../services/reports";
import { filterChart, filterEstChart, returnMonth } from "../../utils/options";

export default function TotalSalesLineChart() {
  const [salesProduct, setSalesProduct] = useState([]);
  const [salesServices, setSalesServices] = useState([]);
  const [salesEsthetic, setSalesEsthetic] = useState([]);
  useEffect(() => {
    const getSalesProduct = () => {
      getProductSales(1000).then((res) => {
        if (res.financeProduct) {
          setSalesProduct(res.financeProduct);
          return;
        }
        setSalesProduct([]);
      });
    };
    return getSalesProduct();
  }, []);
  useEffect(() => {
    const getSalesProduct = () => {
      getServicesSales(1000).then((res) => {
        if (res.financeHospital) {
          setSalesServices(res.financeHospital);
          return;
        }
        setSalesServices([]);
      });
    };
    return getSalesProduct();
  }, []);
  useEffect(() => {
    const getSalesProduct = () => {
      getEstheticSales(1000).then((res) => {
        if (res.financePeluqueria) {
          setSalesEsthetic(res.financePeluqueria);
          return;
        }
        setSalesEsthetic([]);
      });
    };
    return getSalesProduct();
  }, []);
  const ref = useRef("chart");
  let año = new Date().getFullYear();
  let mes = new Date().getMonth() + 1;
  let diasMes = new Date(año, mes, 0).getDate();
  const arr = Array.from(Array(diasMes).keys());
  const newArr = arr.map(function (a) {
    return a + 1;
  });
  const sales = newArr.map((n) => {
    const filterP = filterChart(salesProduct, n);
    const filterS = filterChart(salesServices, n);
    const filterE = filterEstChart(salesEsthetic, n);
    const totalSalesP = filterP
      ?.map((p) => Number(p.totalPrice))
      .reduce((a, b) => a + b, 0);
    const totalSalesS = filterS
      ?.map((p) => Number(p.totalPrice))
      .reduce((a, b) => a + b, 0);
    const totalSalesE = filterE
      ?.map((p) => Number(p.totalPrice))
      .reduce((a, b) => a + b, 0);
    return totalSalesP + totalSalesS + totalSalesE;
  });
  const data = {
    labels: newArr,
    datasets: [
      {
        label: "# de ventas del mes",
        data: sales,
        fill: false,
        backgroundColor: "#D30600",
        borderColor: "#DE6D6A",
      },
    ],
  };
  const options = {
    stacked: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="mt-10">
      <p className=" uppercase text-xl">
        Ventas totales del mes de{" "}
        {returnMonth(new Date().getMonth() + 1)}
      </p>
      <Chart type="line" ref={ref} data={data} options={options} />
    </div>
  );
}
