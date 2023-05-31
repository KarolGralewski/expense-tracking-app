import React from 'react';

export const TransactionTypeSelect = ({ onChange }) => {
  return (
    <>
      <label className="label">
        <span className="label-text text-gray-300">Pick the type of transaction</span>
      </label>
      <select className="select mb-6 w-full max-w-xs bg-gray-800" onChange={onChange}>
        <option className=" bg-gray-800 ">Income</option>
        <option className=" bg-gray-800">Expense</option>
      </select>
    </>
  );
};
