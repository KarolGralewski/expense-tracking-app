import React from 'react';

export const TransactionAmountInput = ({ onChange }) => {
  function isNumeric(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);

    // Allow numeric keys, backspace, delete, and decimal point
    const numericRegex = /[0-9]|\.|Backspace|Delete/;

    if (!numericRegex.test(keyValue)) {
      event.preventDefault();
      return false;
    }
  }

  return (
    <div className=" form-control mb-10">
      <label className="label ">
        <span className="label-text text-gray-300">Enter amount</span>
      </label>
      <label className="input-group text-gray-300">
        <input
          type="text"
          placeholder="0.01"
          className=" input-bordered input w-full border border-gray-800/50 bg-gray-800 text-lg  text-gray-200"
          id="numericInput"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={onChange}
        />
        <span className="border-2 border-gray-800 bg-gray-900 font-semibold text-gray-300">$</span>
      </label>
    </div>
  );
};
