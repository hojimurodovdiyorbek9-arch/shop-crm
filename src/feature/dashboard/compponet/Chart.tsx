import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const SignUpChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
       
      },
    },

    dataLabels: {
      enabled: false,
      
    },

    stroke: {
      curve: "straight",
    },

    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },

    legend: {
      horizontalAlign: "left",
    },
  };

  const series = [
    {
      name: "Sign-ups",
      data: [1500, 2500, 2000, 1400, 3400, 2300, 2800],
    },
  ];

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default SignUpChart;
