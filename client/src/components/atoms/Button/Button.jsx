import React from 'react';

export const Button = ({ isPrimary, text, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={isPrimary ? '"focus:shadow-outline text-s focus:outline-none" rounded  bg-yellow-400 px-10  py-2 font-semibold  text-black hover:bg-yellow-500' : ' focus:shadow-outline text-s rounded  border-2 border-slate-400 bg-slate-800 px-5 py-1 font-semibold text-white   transition   hover:bg-yellow-500 focus:outline-none'}>
      {text}
    </button>
  );
};
