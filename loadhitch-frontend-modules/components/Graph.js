import { Bar } from "react-chartjs-2";
const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Loadhitch Users",
      backgroundColor: "#70AD47",
      borderColor: "#70AD47",
      borderWidth: 1,
      hoverBackgroundColor: "#70AD47",
      hoverBorderColor: "#70AD47",
      data: [65, 59, 80, 81, 88, 90, 95, 100, 101, 112, 115, 120],
    },
  ],
};
function Graph() {
  return (
    <div style={{ width: "100vw" }}>
      <h2 className="align-self-center">Trucker Statistics</h2>
      <Bar
        data={data}
        width={50}
        height={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
export default Graph;
