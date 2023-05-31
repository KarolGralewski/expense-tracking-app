import React from 'react';

export const Modal = ({ children }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal ">
        <div className="h-/3 modal-box relative  w-full  bg-gray-900 px-9 shadow-xl lg:w-3/12">
          <label htmlFor="my-modal-5" className="btn-sm btn-circle btn absolute right-6 top-6 bg-gray-800 text-gray-400 hover:bg-gray-700">
            ✕
          </label>
          {children}
        </div>
      </div>
    </>
  );
};
