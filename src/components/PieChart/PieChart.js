import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ options, data }) {
  return (
    <Pie
      data={data}
      options={options}
      style={{ width: "100%", height: "100%", margin: "auto" }}
    />
  );
}

export default PieChart;
