"use client"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppContext } from '../context/appContext';

const ChartTop = () => {
  const { XpView, loading } = useAppContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!XpView || XpView.length === 0) {
    return <div>No data available</div>;
  }

  // Function to get project name from path
  const getProjectName = (path) => {
    const parts = path.split('/');
    return parts[parts.length - 1];
  };

  // Data formatting function
  const formatAmount = (amount) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)} MB`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(1)} kB`;
    } else {
      return `${amount} B`;
    }
  };

  // Prepare data for recharts BarChart
  const data = XpView.map((item) => ({
    name: getProjectName(item.path),
    xpAmount: item.amount,
  }));

  return (
    <div className="bg-white rounded-2xl w-[90%] h-max m-auto py-2">
      <div className="text-xl font-semibold mb-4 flex gap-2 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#5e37ff"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
          />
        </svg>

        <h2 className="text-[#5e37ff]">XP View by Project</h2>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatAmount} />
          <Tooltip formatter={formatAmount} />
          <Bar dataKey="xpAmount" fill="#5e37ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTop;
