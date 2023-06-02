import React from 'react';

export const ProfileDropdown = ({ onClickLogout, onClickSettings }) => {
  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
        <div className="flex w-12 items-center justify-center rounded-full border-2 border-violet-900/80  bg-gray-950"></div>
      </label>
      <ul tabIndex={0} className="dropdown-content menu rounded-box menu-compact mt-3 w-52  bg-gray-900 p-2   shadow-2xl">
        <li>
          <a className="text-lg" onClick={onClickSettings}>
            Settings
          </a>
        </li>
        <li>
          <a className="text-lg" onClick={onClickLogout}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};
