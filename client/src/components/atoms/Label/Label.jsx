import React from 'react';

export const Label = ({ labelText, labelFor }) => {
  return (
    <label className="mb-2 block text-sm font-bold text-slate-300" htmlFor={labelFor}>
      {labelText}
    </label>
  );
};
