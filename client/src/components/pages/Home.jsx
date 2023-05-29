import React from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from 'react';
import { Button } from '../atoms/Button/Button';

export const Home = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  useEffect(() => {
    let token = 'temp';
    try {
      token = localStorage.getItem('token');
      console.log(token);
    } catch {
      console.log('Cannot read token');
    }

    let headers = {
      Authorization: `Bearer ${token}`,
    };

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/data', { headers });
        setData(response.data);
      } catch (error) {
        // console.log(error);
      }
    };

    fetchData();
  });

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
