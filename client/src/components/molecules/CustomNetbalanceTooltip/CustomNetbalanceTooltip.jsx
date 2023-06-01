import React from 'react';
import { format, parseISO } from 'date-fns';

export const CustomNetbalanceTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="flex flex-col justify-center rounded-xl bg-gray-800  p-5  shadow-sm">
        <h1 className="mb-1 text-sm font-semibold text-gray-400">{format(parseISO(label), 'eeee, d MMM, yyyy')}</h1>
        <p className="text-center text-xl font-bold text-gray-200">${payload[0].value}</p>
      </div>
    );
  }

  return null;
};
