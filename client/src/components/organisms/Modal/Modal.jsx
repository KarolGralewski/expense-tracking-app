import React from 'react';

export const Modal = ({ children }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box h-2/3 bg-gray-900 shadow-xl">
          <label for="my-modal-3 " className="btn-sm btn-circle btn absolute right-5 top-5 bg-gray-800 text-gray-400">
            ✕
          </label>
          {children}
        </div>
      </div>
    </>
  );
};
