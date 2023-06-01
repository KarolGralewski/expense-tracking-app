import React from 'react';

export const TransactionContainer = ({ isIncome, amount, date, title }) => {
  const sign = isIncome ? '+' : '-';
  return (
    <div className="flex w-1/2 justify-between rounded-lg bg-gray-800 p-5 shadow-xl shadow-purple-500/5 transition hover:shadow-purple-500/10">
      <div>
        <div className="font-bold text-gray-500">{date}</div>
        <div className="text-2xl font-semibold text-gray-400">{title}</div>
      </div>
      <div className="flex items-end text-4xl font-bold text-violet-600">
        <span className="mb-1 mr-1 text-3xl">{sign}</span>${amount}
      </div>
    </div>
  );
};
