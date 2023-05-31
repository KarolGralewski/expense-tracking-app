import React from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from 'react';
import { Button } from '../atoms/Button/Button';
import moment from 'moment';
import { ProfileDropdown } from '../organisms/ProfileDropdown.jsx/ProfileDropdown';
import { Modal } from '../organisms/Modal/Modal';
import { ModalContent } from '../organisms/ModalContent/ModalContent';

export const Home = () => {
  const date = moment();
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

    console.log(token);

    let headers = {
      Authorization: `Bearer ${token}`,
    };

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/data', { headers });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" text-whit3 h-screen bg-gray-950 px-6 ">
      {/* navbar */}
      <div className=" flex items-center justify-center py-6">
        <div className="flex w-full items-center justify-between gap-10">
          <div>
            <h1 className="text mb-1 mr-2 font-semibold text-gray-600 "> Today is {formattedDate} </h1>
            <h1 className="text-2xl font-bold text-gray-100">Nice to see you back, {data.firstName}!</h1>
          </div>
          <div className="flex gap-10">
            <label for="my-modal-3" className=" btn-outline btn border border-purple-500 text-gray-300 hover:border-purple-500 hover:bg-purple-500 hover:text-gray-50">
              Add data
            </label>

            <ProfileDropdown onClickLogout={handleLogout} />

            <Modal>
              <ModalContent />
            </Modal>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-between gap-5 pb-5  md:h-[calc(100%-7rem)]  md:flex-row">
        <div className=" flex w-full flex-col gap-5">
          <div className=" flex h-1/4 flex-col items-center justify-start rounded-xl bg-gray-900 py-5">
            <div className="text-center text-xl font-semibold text-gray-400">Net Balance</div>
            <div className="flex h-full items-center items-center">
              <div className="bg-gradient-to-r from-indigo-800 to-pink-500 bg-clip-text text-6xl font-bold text-transparent ">
                <span className=" text-xl font-bold text-pink-500/20">$</span>250
              </div>
            </div>
          </div>
          <div className="  flex h-3/4 flex-col items-center justify-start rounded-xl bg-gray-900 py-5">
            <div className="text-center text-xl font-semibold text-gray-400">Spendings</div>
            <div className="flex h-full items-center items-center">
              <div className="text-center text-xl font-semibold text-gray-300"></div>
            </div>
          </div>
        </div>
        <div className=" flex w-full flex-col gap-5 text-white">
          <div className=" flex h-4/6 flex-col items-center justify-start rounded-xl bg-gray-900 py-5">
            <div className="text-center text-xl font-semibold text-gray-400">Cashflow</div>
            <div className="flex h-full items-center items-center">
              <div className="text-center text-xl font-semibold text-gray-300"></div>
            </div>
          </div>
          <div className=" flex  h-2/6 flex-col items-center justify-start rounded-xl bg-gray-900 py-5">
            <div className="text-center text-xl font-semibold text-gray-400">Incomes</div>
            <div className="flex h-full items-center items-center">
              <div className="text-center text-xl font-semibold text-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
