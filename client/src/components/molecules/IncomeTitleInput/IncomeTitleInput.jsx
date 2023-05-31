import React from 'react';

export const IncomeTitleInput = ({ onChange }) => {
  return (
    <div className="mb-5 ">
      <label className="label">
        <span className="label-text text-gray-300">Pick the title of income</span>
      </label>

      <input type="text" onChange={onChange} placeholder="Type here" className="input-bordered input w-full  max-w-xs border-0 bg-gray-800 text-lg text-gray-200" />
    </div>
  );
};
