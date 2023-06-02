import React from 'react';

export const Button = ({ isSecondary, text, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={isSecondary ? 'text-s rounded border-2 border-pink-500/30  bg-gray-950 px-5 py-1 font-semibold  text-gray-300 shadow-xl transition  focus:outline-none' : 'text-s  rounded bg-violet-600  px-6 py-2 font-semibold text-gray-300 transition hover:shadow-lg'}>
      {text}
    </button>
  );
};
