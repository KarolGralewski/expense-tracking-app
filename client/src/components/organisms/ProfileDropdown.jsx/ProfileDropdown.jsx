import React from 'react';
import { Link } from 'react-router-dom';

export const ProfileDropdown = ({ onClickLogout, onClickSettings }) => {
  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
        <div className="flex w-12 items-center justify-center rounded-full border-2 border-violet-900/80  bg-violet-900/50"></div>
      </label>
      <ul tabIndex={0} className="dropdown-content menu rounded-box menu-compact mt-3 w-52  bg-gray-900 p-2   shadow-2xl">
        <li>
          <Link to={'/settings'} className="text-lg">
            Settings
          </Link>
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
