import ReactMarkdown from "react-markdown";
// charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

const notes = `
## React Chart

react-chartjs-2 is the official React wrapper for Chart.js, allowing you to use Chart.js elements as standard React components. It is widely used for creating flexible, responsive data visualizations like bar, line, and pie charts.

**Installation:** \`npm i react-chartjs-2\`

**Documentation:** [react-chartjs-2](https://react-chartjs-2.js.org/examples)

#### Usage

- Import: \`import { Line, Bar, Doughnut } from "react-chartjs-2";\`

- Configure the charts using below

  - \`import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";\`

  - \`ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);\`

- Import the required Chart component (Line, Bar, Doughnut) & create a data & options object and pass it as props to the Chart component.

- Props -
  - data: Define the labels, data points, colors, etc.
  - options: Define the chart label, y-axis scales, steps, sizes, etc.
`;

function ReactCharts() {
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2021 (millions)",
        data: [3, 2, 2, 1, 5],
        tension: 0.4, // this makes the line smooth
        borderColor: "rgba(255, 206, 86, 0.5)",
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        pointBackgroundColor: "rgba(255, 206, 86, 1)",
        pointBorderColor: "rgba(255, 206, 86, 1)",
      },
      {
        label: "Sales for 2022 (millions)",
        data: [1, 3, 2, 2, 3],
        tension: 0.4, // this makes the line smooth
        borderColor: "rgba(54, 162, 235, 0.5)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Line Chart",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 6,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2021 (millions)",
        data: [3, 2, 2, 1, 5],
        borderColor: "rgba(255, 206, 86, 0.5)",
        backgroundColor: "rgba(255, 206, 86, 0.5)",
      },
      {
        label: "Sales for 2022 (millions)",
        data: [1, 3, 2, 2, 3],
        borderColor: "rgba(54, 162, 235, 0.5)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Bar Chart",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 6,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  const doughnutChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2021 (millions)",
        data: [3, 2, 2, 1, 5],
        borderColor: "rgba(255, 255, 255, 1)",
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(255, 205, 86, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 159, 64, 1)", "rgba(153, 102, 255, 1)",],
      },
    ],
  };

  const doughnutChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Doughnut Chart",
      },
    },
    radius: "80%", // reduces overall size
    cutout: "70%", // increase this to make doughnut thinner
  };

  return (
    <div>
      <ReactMarkdown>{notes}</ReactMarkdown>
      <hr />
      <h3>Example</h3>
      <div
        style={{
          backgroundColor: "whiteSmoke",
          borderRadius: "20px",
          padding: "24px",
        }}
      >
        <Line data={lineChartData} options={lineChartOptions} />
      </div>
      <br />
      <br />
      <div
        style={{
          backgroundColor: "whiteSmoke",
          borderRadius: "20px",
          padding: "24px",
        }}
      >
        <Bar data={barChartData} options={barChartOptions} />
      </div>
      <br />
      <br />
      <div
        style={{
          backgroundColor: "whiteSmoke",
          borderRadius: "20px",
          padding: "24px",
          height: "400px"
        }}
      >
        <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
      </div>
    </div>
  );
}

export default ReactCharts;
