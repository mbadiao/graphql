// "use client";

// import Chart from "react-apexcharts";
// import { useAppContext } from "../context/appContext";

// const Middle_bottom = () => {
//   const { TransactionXp, loading } = useAppContext();

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   if (!TransactionXp || TransactionXp.length === 0) {
//     return <div>No data available</div>;
//   }
//   // Extracting createdAt and amount from TransactionXp
//   const chartData = TransactionXp.map((item) => ({
//     x: new Date(item.createdAt).getTime(),
//     y: item.amount,
//   }));

//   // Sorting chartData by createdAt
//   chartData.sort((a, b) => a.x - b.x);

//   // ApexCharts configuration options
//   const options = {
//     chart: {
//       type: "area",
//       height: 350,
//       zoom: {
//         enabled: false,
//       },
//       toolbar: {
//         show: false, // Remove the download option
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//       colors: ["#ffffff"],
//     },
//     xaxis: {
//       type: "datetime",
//       labels: {
//         style: {
//           colors: "#ffffff", // Set x-axis text color to white
//         },
//       },
//     },
//     yaxis: {
//       labels: {
//         style: {
//           colors: "#ffffff", // Set y-axis text color to white
//         },
//       },
//     },
//     fill: {
//       colors: ["#ffffff"],
//     },
//     animations: {
//       enabled: true,
//       easing: "easeinout",
//       speed: 800,
//       animateGradually: {
//         enabled: true,
//         delay: 150,
//       },
//       dynamicAnimation: {
//         enabled: true,
//         speed: 350,
//       },
//     },
//     tooltip: {
//       theme: "dark", // Set tooltip text color to white
//     },
//   };

//   // ApexCharts series containing the data
//   const series = [
//     {
//       name: "XP",
//       data: chartData,
//     },
//   ];

//   return (
//     <div className="w-[60vw] h-max bg-to-hover bg-primary rounded-2xl mt-5 mx-auto">
//       <div className="text-white text-xl p-5 flex justify-center gap-3 items-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           class="size-6"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
//           />
//         </svg>

//         <h2>XP progression</h2>
//       </div>
//       <Chart options={options} series={series} type="area" height={350} />
//     </div>
//   );
// };

// export default Middle_bottom;

import React from 'react'

const Middle_bottom = () => {
  return (
    <div>Middle_bottom</div>
  )
}

export default Middle_bottom