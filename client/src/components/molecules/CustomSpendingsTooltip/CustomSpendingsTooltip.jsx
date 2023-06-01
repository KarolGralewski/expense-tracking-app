import React from 'react';

export const CustomSpendingsTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="flex flex-col justify-center rounded-xl bg-gray-800  p-5  shadow-sm">
        <h1 className="mb-1 text-sm font-semibold text-gray-400"></h1>
        <p className="text-center text-lg font-bold text-gray-200">${payload[0].value}</p>
      </div>
    );
  }

  return null;
};
