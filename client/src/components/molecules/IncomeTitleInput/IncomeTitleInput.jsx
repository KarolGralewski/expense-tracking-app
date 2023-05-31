import React from 'react';

export const IncomeTitleInput = () => {
  return (
    <div className="mb-5">
      <label className="label">
        <span className="label-text text-gray-300">Pick the title of income</span>
      </label>
      <input type="text" placeholder="Type here" className="input-bordered input w-full  max-w-xs border-0 bg-gray-800" />
    </div>
  );
};
