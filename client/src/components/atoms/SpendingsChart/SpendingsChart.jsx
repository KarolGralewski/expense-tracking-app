import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Line, Cell } from 'recharts';
import { CustomSpendingsTooltip } from '../../molecules/CustomSpendingsTooltip/CustomSpendingsTooltip';
import { useEffect, useState } from 'react';
import axios from 'axios';

const colors = ['#7034d5', '#632ebe', '#5729a6', '#4a238e', '#3e1d77', '#32175f', '#251147', '#30185b', '#5d1fc7', '##0c0618'];

export const SpendingsChart = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let token = 'temp';
    try {
      token = localStorage.getItem('token');
    } catch {
      console.log('Cannot read token');
    }

    let headers = {
      Authorization: `Bearer ${token}`,
    };

    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 10));

        const response = await axios.get('http://localhost:8080/api/expenses', { headers });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component is unmounted
    };
  }, []);

  if (isLoading) {
    return <div className="text-6xl font-bold text-gray-800/40">Loading data...</div>;
  }

  if (data === null) {
    return <div className="text-6xl font-bold text-gray-800/40">No data</div>;
  }

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

  if (data === null) {
    return <div className="text-6xl font-bold text-gray-800/40">No data</div>;
  }

  return (
    <div className="flex justify-center">
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
            return <span className={'text-md font-semibold text-gray-500'}>{payload.category}</span>;
          }}
        />

        <Tooltip content={<CustomSpendingsTooltip />} />

        <Line type="monotone" data={data} dataKey="category" stroke="#c49696" />
      </PieChart>
    </div>
  );
};