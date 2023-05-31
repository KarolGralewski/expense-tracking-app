import React from 'react';
import { PieChart, Pie, Legend, ResponsiveContainer, Cell } from 'recharts';

export const RoundChart = () => {
  const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
    return <span style={{ color }}>{value}</span>;
  };

  const colors = ['#9356FA', '#7C3AED', '#550BD6', '#3E00A8', '#2F0081', '#5C63FF', '#3E3AED', '#3600D1', '#2C00A8', '#210081'];

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

  const sansSerif = "'Nunito'";
  const fontSize = 15;
  return (
    <div className="flex justify-center">
      <PieChart width={600} height={400}>
        <Legend layout="vertical" iconType="circle" iconSize={15} verticalAlign="middle" align="right" />
        <Pie stroke="none" data={data} cx={190} cy={190} innerRadius={100} outerRadius={170} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
