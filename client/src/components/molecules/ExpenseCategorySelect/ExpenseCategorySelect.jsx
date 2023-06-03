import React from 'react';

export const ExpenseCategorySelect = ({ onChange }) => {
  return (
    <>
      <label className="label">
        <span className="label-text text-gray-300">Pick the category of the expense</span>
      </label>
      <select className="select mb-5 w-full max-w-xs bg-gray-800 text-lg text-gray-200" onChange={onChange}>
        <option default className=" bg-gray-800 ">
          Entertainment
        </option>
        <option className=" bg-gray-800 ">Food and Dining</option>
        <option className=" bg-gray-800 ">Health and Medical</option>
        <option className=" bg-gray-800 ">Housing and Rent</option>
        <option className=" bg-gray-800 ">Shopping</option>
        <option className=" bg-gray-800 ">Transportation</option>
        <option className=" bg-gray-800 ">Travel</option>
        <option className=" bg-gray-800 ">Utilities</option>
        <option className=" bg-gray-800 ">Other</option>
      </select>
    </>
  );
};
