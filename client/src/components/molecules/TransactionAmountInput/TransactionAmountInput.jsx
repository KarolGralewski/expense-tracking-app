import React from 'react';

export const TransactionAmountInput = ({ onChange }) => {
  return (
    <div className=" form-control mb-5">
      <label className="label ">
        <span className="label-text text-gray-300">Enter amount</span>
      </label>
      <label className="input-group text-gray-300">
        <input type="text" placeholder="0.01" className=" input-bordered input w-2/5 border border-gray-800/50 bg-gray-800 font-bold" />
        <span className="border border-gray-800/50 bg-gray-900 text-gray-400">$</span>
      </label>
    </div>
  );
};
