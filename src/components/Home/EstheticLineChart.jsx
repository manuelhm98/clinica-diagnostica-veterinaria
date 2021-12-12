import { useRef, useState, useEffect } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { getEstheticSales } from "../../services/reports";
import { filterEstChart, returnMonth } from "../../utils/options";

export default function EstethicLineChart() {
  const [salesProduct, setSalesProduct] = useState([]);
  useEffect(() => {
    const getSalesProduct = () => {
      getEstheticSales(1000).then((res) => {
        if (res.financePeluqueria) {
          setSalesProduct(res.financePeluqueria);
          console.log(res)
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
    const filter = filterEstChart(salesProduct, n);
    
    return filter?.length;
  });
  const data = {
    labels: newArr,
    datasets: [
      {
        label: "# de ventas del mes",
        data: sales,
        fill: false,
        backgroundColor: "#F3D604",
        borderColor: "#ECDF86",
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
      <p className=" uppercase text-xl">Venta de servicios esteticos del mes de {returnMonth(new Date().getMonth() + 1)}</p>
      <Chart type="line" ref={ref} data={data} options={options} />
    </div>
  );
}