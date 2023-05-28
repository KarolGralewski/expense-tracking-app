import React from 'react';

export const Input = ({ name, type, placeholder, onChange }) => {
  return <input className="focus:shadow-outline w-full  appearance-none rounded  bg-slate-700  px-3 py-3 leading-tight shadow focus:outline-none" onChange={onChange} name={name} type={type} placeholder={placeholder}></input>;
};
