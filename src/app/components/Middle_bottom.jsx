"use client";
// Import necessary modules from recharts
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppContext } from '../context/appContext';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-2 rounded-md">
        <p className="label text-black">{`Date: ${payload[0].payload.fullDate}`}</p>
        <p className="intro text-black">{`Amount: ${payload[0].value} KB`}</p>
      </div>
    );
  }

  return null;
};

const Middle_bottom = () => {
  const { TransactionXp, loading } = useAppContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!TransactionXp || TransactionXp.length === 0) {
    return <div>No data available</div>;
  }

  // Extracting createdAt and amount from TransactionXp
  const chartData = TransactionXp.map((item) => ({
    name: new Date(item.createdAt).getFullYear().toString(), // Displaying only the year
    fullDate: new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), // Full date for tooltip
    uv: item.amount,
  }));

  // Sorting chartData by createdAt
  chartData.sort((a, b) => new Date(a.fullDate) - new Date(b.fullDate));

  return (
    <div className="w-[45vw] h-max bg-to-hover bg-primary rounded-2xl mt-5 mx-auto">
      <div className="text-white text-xl p-5 flex justify-center gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
          />
        </svg>
        <h2>XP progression</h2>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" tick={{ fill: 'white' }} stroke="white" />
          <YAxis tick={{ fill: 'white' }} stroke="white" />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="uv" stroke="#ffffff" fill="#ffffff" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Middle_bottom;
