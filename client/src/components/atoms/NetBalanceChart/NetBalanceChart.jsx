import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
import { CustomNetbalanceTooltip } from '../../molecules/CustomNetbalanceTooltip/CustomNetbalanceTooltip';

const data = [
  {
    date: '2023-03-10T14:48:00',
    netBalance: 124,
  },
  {
    date: '2023-03-12T14:48:00',
    netBalance: 521,
  },
  {
    date: '2023-03-18T14:48:00',
    netBalance: 912,
  },
  {
    date: '2023-04-02T14:48:00',
    netBalance: 324,
  },
  {
    date: '2023-04-08T14:48:00',
    netBalance: 359,
  },
  {
    date: '2023-04-12T14:48:00',
    netBalance: 2390,
  },
  {
    date: '2023-04-15T14:48:00',
    netBalance: 3490,
  },
];

export const NetBalanceChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={6.5 / 3.0} maxHeight={300}>
      <AreaChart data={data} margin={{ right: 20, left: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#7c3aed" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area type="monotone" dataKey="netBalance" stroke="#7c3aed" strokeWidth={4} fillOpacity={1} fill="url(#colorUv)" />

        <XAxis
          dy={10}
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
