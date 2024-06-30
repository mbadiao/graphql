import React from 'react';
import { PieChart, Pie, Cell ,Tooltip} from 'recharts';

const COLORS = ['#ffffff','#a18df2'];

const ProfileChart = ({ totalUp, totalDown }) => {
  const data = [
    { name: 'Done', value: Number((totalUp / 1000000).toFixed(2)) },
    { name: 'Received', value: Number((totalDown / 1000000).toFixed(2)) },
  ];

  return (
    <PieChart width={160} height={160}>
        <Tooltip cursor={false}/>
      <Pie
        data={data}
        cx={75}
        cy={75}

        innerRadius={60}
        outerRadius={70}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default ProfileChart;
