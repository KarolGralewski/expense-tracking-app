import React from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from 'react';
import { Button } from '../atoms/Button/Button';
import moment from 'moment';

export const Home = () => {
  const date = moment(); // Assuming you have the date stored in a variable, or you can pass a specific date to moment().
  const formattedDate = date.format('dddd, D MMMM');

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
  }, []);

  return (
    <div className=" text-whit3 h-screen bg-gray-950 px-5">
      {/* navbar */}
      <div className=" flex items-center justify-center px-4 py-6">
        <div className="flex w-full max-w-screen-2xl items-center justify-between gap-10">
          <div>
            <h1 className="text mb-1 font-semibold text-gray-600">Today is {formattedDate}</h1>
            <h1 className="text-2xl font-bold text-gray-100">Nice to see you back, {data.firstName}!</h1>
          </div>
          <div className="flex gap-10">
            <Button text="Add Data" />
            <Button text="Log out" onClick={handleLogout} isSecondary />
          </div>
        </div>
      </div>
    </div>
  );
};
