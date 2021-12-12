import { useRef, useState, useEffect } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { getServicesSales } from "../../services/reports";
import { filterChart, returnMonth } from "../../utils/options";

export default function ServicesLineChart() {
  const [salesProduct, setSalesProduct] = useState([]);
  useEffect(() => {
    const getSalesProduct = () => {
      getServicesSales(1000).then((res) => {
        if (res.financeHospital) {
          setSalesProduct(res.financeHospital);
          return;
        }
        setSalesProduct([]);
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
    const filter = filterChart(salesProduct, n);
    return filter?.length;
  });
  const data = {
    labels: newArr,
    datasets: [
      {
        label: "# de ventas del mes",
        data: sales,
        fill: false,
        backgroundColor: "#26C000",
        borderColor: "#8EC87F",
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
      <p className=" uppercase text-xl">Venta de servicios del mes de {returnMonth(new Date().getMonth() + 1)}</p>
      <Chart type="line" ref={ref} data={data} options={options} />
    </div>
  );
}