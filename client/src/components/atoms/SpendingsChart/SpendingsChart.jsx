import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Line, Cell } from 'recharts';
import { CustomSpendingsTooltip } from '../../molecules/CustomSpendingsTooltip/CustomSpendingsTooltip';
import { addTokenToRequestHeader } from './../../../helpers/addTokenToRequestHeader';
import { useEffect, useState } from 'react';
import axios from 'axios';

const colors = ['#5d1fc7', '#3e1d77', '#5729a6', '#4a238e', '#4c2a8f', '#30185b', '#482e74', '#7034d5', '#32175f', '#632ebe'];

export const SpendingsChart = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const headers = addTokenToRequestHeader();

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/expenses', { headers });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const categoryAmounts = data.reduce((result, item) => {
    const { category, amount } = item;
    if (result[category]) {
      result[category] += amount;
    } else {
      result[category] = amount;
    }
    return result;
  }, []);

  const categoryAmountsArray = Object.entries(categoryAmounts).map(([category, amount]) => ({
    category,
    amount,
  }));

  if (isLoading) {
    return <div className="text-6xl font-bold text-gray-800/10">Loading data...</div>;
  }

  if (data.length === 0) {
    return <div className="text-6xl font-bold text-violet-800/20">No data</div>;
  } else {
    return (
      <PieChart width={600} height={400} data={categoryAmountsArray}>
        <Pie stroke="none" data={categoryAmountsArray} cx={190} cy={190} innerRadius={100} outerRadius={170} dataKey="amount">
          {categoryAmountsArray.map((entry, index) => (
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
          formatter={(value, entry) => {
            const { payload } = entry;
            return <span className={'text-md font-bold text-gray-700'}>{payload.category}</span>;
          }}
        />

        <Tooltip content={<CustomSpendingsTooltip />} />

        <Line type="monotone" data={data} dataKey="category" stroke="#c49696" />
      </PieChart>
    );
  }
};
