import React from 'react';
import { format, parseISO } from 'date-fns';

export const Transaction = ({ isIncome, amount, date, title }) => {
  const sign = isIncome ? '+' : '-';
  const correctDate = parseISO(date);
  return (
    <div className="animate-wiggle flex w-full justify-between  rounded-lg bg-violet-900 px-5  py-4 shadow-2xl transition hover:bg-violet-800">
      <div>
        <div className="font-bold text-violet-400">{format(correctDate, 'MMMM d, yyyy')}</div>
        <div className="text-2xl font-semibold text-gray-100">{title}</div>
      </div>
      <div className="flex items-end text-4xl font-bold text-gray-200">
        <span className=" mb-1 mr-4 rounded-md bg-violet-700 px-2 text-lg font-semibold text-gray-100">{sign}</span>
        <span className=" mb-1 mr-1  text-sm">$</span>
        {Math.abs(amount)}
      </div>
    </div>
  );
};
