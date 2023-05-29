import React from 'react';

export const Button = ({ isSecondary, text, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={isSecondary ? 'text-s rounded bg-gray-950   px-5 py-1 font-semibold text-gray-300  transition  focus:outline-none' : 'text-s via-inigo-70 rounded bg-gray-900 bg-gradient-to-r from-indigo-800 to-pink-500  px-6 py-2 font-semibold text-gray-300    transition'}>
      {text}
    </button>
  );
};
