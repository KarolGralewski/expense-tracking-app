import React from 'react';
import { format, parseISO } from 'date-fns';

export const Transaction = ({ isIncome, amount, date, title }) => {
  const sign = isIncome ? '+' : '-';
  const correctDate = parseISO(date);
  return (
    <div className=" flex w-full justify-between  rounded-lg bg-violet-900 px-6  py-4 shadow-2xl transition hover:bg-violet-800">
      <div>
        <div className="font-bold text-violet-400">{format(correctDate, 'MMMM d, yyyy')}</div>
        <div className="text-2xl font-bold text-violet-200">{title}</div>
      </div>
      <div className="flex items-end text-4xl font-bold text-violet-200">
        <span className=" mb-2 mr-5 rounded-md bg-violet-700 px-2  text-base font-extrabold text-violet-200">{sign}</span>
        <span className=" mb-1 mr-1 text-sm text-violet-300">$</span>
        {Math.abs(amount)}
      </div>
    </div>
  );
};
