import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Line, Cell } from 'recharts';
import { CustomNetbalanceTooltip } from '../../molecules/CustomNetbalanceTooltip/CustomNetbalanceTooltip';
import { CustomSpendingsTooltip } from '../../molecules/CustomSpendingsTooltip/CustomSpendingsTooltip';

const data = [
  { name: 'Entertainment', value: 400 },
  { name: 'Food and Dining', value: 300 },
  { name: 'Health and Medical', value: 300 },
  { name: 'Housing and Rent', value: 200 },
  { name: 'Shopping', value: 200 },
  { name: 'Transportation', value: 200 },
  { name: 'Travel', value: 200 },
  { name: 'Utilities', value: 200 },
  { name: 'Other', value: 200 },
];

const colors = ['#7034d5', '#632ebe', '#5729a6', '#4a238e', '#3e1d77', '#32175f', '#251147', '#30185b', '#5d1fc7', '##0c0618'];

export const RoundChart = () => {
  return (
    <div className="flex justify-center">
      <PieChart width={600} height={400} data={data}>
        <Pie stroke="none" data={data} cx={190} cy={190} innerRadius={100} outerRadius={170} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>

        <Legend
          cy={100}
          layout="vertical"
          iconType="circle"
          iconSize={15}
          verticalAlign="middle"
          align="right"
          formatter={(value) => {
            return <span className={'text-md font-semibold text-gray-500'}>{value}</span>;
          }}
        />

        <Tooltip content={<CustomSpendingsTooltip />} />

        <Line type="monotone" data={data} dataKey="name" stroke="#c49696" />
      </PieChart>
    </div>
  );
};
