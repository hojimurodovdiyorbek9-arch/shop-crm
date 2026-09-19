import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { useIsDark } from "../../hook/UseIsDark";

const SignUpChart = () => {
  const darkMode = useIsDark();

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
      background: "transparent",
    },

    theme: {
      mode: darkMode ? "dark" : "light",
    },

    colors: ["#4EA674"],

    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "straight",
      width: 2,
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: darkMode ? 0.3 : 0.25,
        opacityTo: 0.02,
        stops: [0, 100],
      },
    },

    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

      labels: {
        style: {
          colors: darkMode ? "#9CA3AF" : "#6B7280",
        },
      },

      axisBorder: {
        color: darkMode ? "#374151" : "#E5E7EB",
      },

      axisTicks: {
        color: darkMode ? "#374151" : "#E5E7EB",
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: darkMode ? "#9CA3AF" : "#6B7280",
        },
      },
    },

    grid: {
      borderColor: darkMode ? "#374151" : "#E5E7EB",
      strokeDashArray: 4,
    },

    legend: {
      horizontalAlign: "left",

      labels: {
        colors: darkMode ? "#F9FAFB" : "#111827",
      },
    },

    tooltip: {
      theme: darkMode ? "dark" : "light",
    },

    markers: {
      size: 0,
      hover: {
        size: 5,
      },
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
