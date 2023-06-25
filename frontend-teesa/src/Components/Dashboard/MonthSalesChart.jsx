import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors
  );

const MonthSalesChart = ({ salesByMonth }) => {
  const labels = salesByMonth.map((sale) => sale.formattedDate);
  const salesData = salesByMonth.map((sale) => parseInt(sale.totalSales));

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Ventas por día',
        data: salesData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-[20em] w-[40em]"> 
      <Line data={data} options={options} />
    </div>
  );
};

export default MonthSalesChart;
