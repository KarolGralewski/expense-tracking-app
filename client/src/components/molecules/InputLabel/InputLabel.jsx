import React from 'react';
import { Label } from '../../atoms/Label/Label';

export const InputLabel = ({ labelFor, labelText, name, type, placeholder, onChange }) => {
  return (
    <>
      <Label labelText={labelText} for={labelFor} />
      <input className="focus:shadow-outline w-full  appearance-none rounded  bg-gray-700  px-3 py-3 leading-tight shadow focus:outline-none" onChange={onChange} name={name} type={type} placeholder={placeholder} required></input>
    </>
  );
};
