import React from 'react';
import { ProfileDropdown } from '../ProfileDropdown.jsx/ProfileDropdown';
import { Modal } from '../Modal/Modal';
import { ModalContent } from '../ModalContent/ModalContent';
import { addTokenToRequestHeader } from '../../../helpers/addTokenToRequestHeader';
import moment from 'moment';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { AnimatedText } from '../AnimatedText/AnimatedText';

export const NavigationBar = () => {
  const date = moment();
  const [data, setData] = useState('');
  const formattedDate = date.format('dddd, D MMMM');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  useEffect(() => {
    const headers = addTokenToRequestHeader();

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/data', { headers });
        setData(response.data);
      } catch (error) {
        handleLogout();
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" flex items-center justify-center py-6">
      <div className="flex w-full items-end justify-between gap-2">
        <div>
          <AnimatedText text={`Today is ${formattedDate}`} delay={0.7} />
          <AnimatedText text={`Nice to see you back, ${data.firstName}`} isBig />
        </div>

        <div className="flex gap-10">
          <label htmlFor="my-modal-5" className=" btn-outline btn border-2 border-violet-900/80 bg-gray-950 text-sm font-bold text-gray-300  hover:border-violet-600  hover:bg-violet-600 hover:text-gray-100">
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
