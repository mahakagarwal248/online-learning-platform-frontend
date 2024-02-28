import PieChart from "../components/PieChart/PieChart";

const chartOptions = {
  plugins: {
    legend: {
      display: true,
      position: "right",
      marginLeft: "50px",
      labels: {
        fontSize: 20,
        color: "black",
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
      },
    },
  },
  responsive: true,
};
const chartData = {
  labels: ["1 star", "2 star", "3 star", "4 star", "5 star"],
  datasets: [
    {
      label: "Ratings",
      data: [10, 10, 20, 45, 15],
      backgroundColor: [
        "rgb(255, 0, 55)",
        "rgb(18, 119, 186)",
        "rgb(255, 183, 0)",
        "rgb(53, 151, 151)",
        "rgb(85, 0, 255)",
      ],
      borderColor: [
        "rgb(255, 0, 55)",
        "rgb(18, 119, 186)",
        "rgb(255, 183, 0)",
        "rgb(53, 151, 151)",
        "rgb(85, 0, 255)",
      ],
      borderWidth: 1,
    },
  ],
};

function Ratings() {
  return (
    <div className="pt-1 pb-0 h-full">
      <p className="pt-1 text-xl text-center text-secondaryDark font-bold mb-[-15px]">
        Ratings
      </p>
      <PieChart
        size={300}
        style={{ height: "100%" }}
        options={chartOptions}
        data={chartData}
      />
    </div>
  );
}

export default Ratings;
