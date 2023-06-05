import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';
import { CustomNetbalanceTooltip } from '../../molecules/CustomNetbalanceTooltip/CustomNetbalanceTooltip';
import { useEffect, useState } from 'react';
import { addTokenToRequestHeader } from '../../../helpers/addTokenToRequestHeader';

import axios from 'axios';

export const NetBalanceChart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [transformedData, setTransformedData] = useState(null);

  useEffect(() => {
    const headers = addTokenToRequestHeader();

    const fetchData = async () => {
      try {
        // await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await axios.get('http://localhost:8080/api/data', { headers });
        setData(response.data);
        setIsLoading(false);

        const transformedData = response.data.netBalance.map(({ amount, date }) => ({
          date: new Date(date).toISOString().slice(0, 19).replace('T', ' '),
          netBalance: amount,
        }));

        setTransformedData(transformedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="text-6xl font-bold text-gray-800/40">Loading data...</div>;
  }

  if (data.netBalance.length === 0) {
    return <div className="text-6xl font-bold text-violet-800/20">No data</div>;
  }

  return (
    <ResponsiveContainer width="100%" aspect={6.5 / 3.0} maxHeight={300}>
      <AreaChart data={transformedData} margin={{ right: 20, left: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#7c3aed" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area type="monotone" dataKey="netBalance" stroke="#7c3aed" strokeWidth={4} fillOpacity={1} fill="url(#colorUv)" />

        <XAxis
          dy={4}
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);

            return format(date, 'MMMM d ');
          }}
          style={{
            fontFamily: 'Nunito',
          }}
        />

        <YAxis
          dx={2}
          dataKey="netBalance"
          axisLine={false}
          tickLine={false}
          tickCount={5}
          tickFormatter={(netBalance) => `$${netBalance}`}
          style={{
            fontFamily: 'Nunito',
          }}
        />

        <Tooltip content={<CustomNetbalanceTooltip />} />

        <CartesianGrid opacity={0.05} strokeWidth={2} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};
