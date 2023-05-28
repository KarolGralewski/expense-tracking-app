import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '../atoms/Button/Button';

export const Home = () => {
  const [name, setName] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className=" h-screen bg-slate-900 text-white">
      {/* navbar */}
      <div className="flex justify-center bg-slate-800 px-4 py-6">
        <div className="flex w-full max-w-screen-2xl justify-between">
          <h1 className="text-lg font-semibold ">Welcome back, Jack Uan!</h1>
          <Button text="Log out" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};
