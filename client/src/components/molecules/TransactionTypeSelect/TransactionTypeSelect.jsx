import React from 'react';

export const TransactionTypeSelect = ({ onChange }) => {
  return (
    <>
      <label className="label">
        <span className="label-text text-gray-300">Pick the type of transaction</span>
      </label>
      <select className="select mb-6 w-full max-w-xs bg-gray-800 text-lg text-gray-200" onChange={onChange} required>
        <option className=" bg-gray-800 text-gray-200">Income</option>
        <option className=" bg-gray-800">Expense</option>
      </select>
    </>
  );
};
