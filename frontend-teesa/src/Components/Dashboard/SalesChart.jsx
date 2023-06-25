import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(Tooltip, Legend, ArcElement);
const SalesChart = ({ salesData }) => {
  const labels = salesData.map((sale) => sale['Product.nombre']);
  const quantities = salesData.map((sale) => parseInt(sale.totalSales));

  const data = {
    labels: labels,
    datasets: [
      {
        data: quantities,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8B008B',
          '#FF4500',
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SalesChart;
