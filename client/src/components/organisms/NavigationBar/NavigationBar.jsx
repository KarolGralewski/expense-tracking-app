import React from 'react';
import { ProfileDropdown } from '../ProfileDropdown.jsx/ProfileDropdown';
import { Modal } from '../Modal/Modal';
import { ModalContent } from '../ModalContent/ModalContent';
import moment from 'moment';
import axios from 'axios';

import { useEffect, useState } from 'react';

export const NavigationBar = () => {
  const date = moment();
  const [data, setData] = useState('');
  const formattedDate = date.format('dddd, D MMMM');

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
    <div className=" flex items-center justify-center py-6">
      <div className="flex w-full items-center justify-between gap-10">
        <div>
          <h1 className="text mb-1 mr-2 font-semibold text-gray-600 "> Today is {formattedDate} </h1>
          <h1 className="text-2xl font-bold text-gray-100">Nice to see you back, {data.firstName}!</h1>
        </div>
        <div className="flex gap-10">
          <label for="my-modal-5" className=" btn-outline btn border-2 border-violet-900/80 bg-gray-950 text-sm font-bold text-gray-300  hover:border-violet-600  hover:bg-violet-600 hover:text-gray-100">
            New transaction
          </label>

          <ProfileDropdown onClickLogout={handleLogout} />

          <Modal>
            <ModalContent />
          </Modal>
        </div>
      </div>
    </div>
  );
};
