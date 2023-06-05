import React, { useState } from 'react';
import { AnimatedText } from '../organisms/AnimatedText/AnimatedText';
import { addTokenToRequestHeader } from '../../helpers/addTokenToRequestHeader';
import axios from 'axios';
import { useEffect } from 'react';

const handleLogout = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

export const Settings = () => {
  const headers = addTokenToRequestHeader();
  const [data, setData] = useState();
  const [email, setEmail] = useState();
  const [alertVisibility, setAlertVisibility] = useState('hidden');
  const [alertMessage, setAlertMessage] = useState('hidden');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/data', { headers });
        setData(response.data.email);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [data]);

  const handleEmailChange = (e) => {
    setEmail({ email: e.target.value });
  };

  const handleEmailUpdate = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/data/updateEmail', email, { headers });
        setAlertMessage('Email updated successfully!');
        setAlertVisibility('flex');
        setTimeout(() => {
          setAlertVisibility('hidden');
        }, 2500);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  const handleAcountDelete = () => {
    const fetchData = async () => {
      try {
        const response = await axios.delete('http://localhost:8080/api/users/delete', { headers });
        setAlertMessage('User deleted successfully, see you soon!');
        setAlertVisibility('flex');
        setTimeout(() => {
          setAlertVisibility('hidden');
        }, 2500);
        setTimeout(() => {
          handleLogout();
        }, 2500);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  const handleTransactionDelete = () => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/data/clearData', { headers });
        setAlertMessage('Transactions cleared successfully');
        setAlertVisibility('flex');
        setTimeout(() => {
          setAlertVisibility('hidden');
        }, 2500);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  return (
    <div className="  h-screen rounded-md bg-gray-950 px-6 py-6 ">
      <AnimatedText text={`Settings`} isBig />
      <div className=" mt-4 overflow-scroll rounded-lg bg-gray-900 px-9 py-5 pb-9">
        <div className={`alert alert-success  max-w-2xl rounded-lg bg-violet-600 ${alertVisibility} mb-4`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0  stroke-violet-200" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-md font-semibold text-violet-100">{alertMessage}</span>
        </div>
        <AnimatedText text="General" delay={0.3} isMedium />
        <div className=" mb-8 mt-3 w-full max-w-2xl  rounded-md border-2 border-gray-600/20 px-6 py-5">
          <div>
            <div className=" text-md font-bold text-gray-300">Change acount email</div>
            <div className=" text-md  text-gray-300">Your email will be changed permanently</div>
            <form onSubmit={handleEmailUpdate} className="flex flex-col items-start">
              <input type="email" placeholder={data} className="input-bordered input mt-5 w-full max-w-md bg-gray-900 text-gray-200" onChange={handleEmailChange} required />
              <button className=" btn-sm btn mt-7 border-0 bg-gray-800 text-gray-200 " type="submit">
                Change email
              </button>
            </form>
          </div>
        </div>

        <AnimatedText text="Danger zone" delay={0.5} isMedium />

        <div className="mt-3 w-full  max-w-2xl gap-2 rounded-md border-2 border-rose-600/20 px-6 py-5">
          <div className="flex items-end justify-between">
            <div>
              <div className=" text-md font-bold text-gray-300">Clear your data</div>
              <div className=" text-md  text-gray-300">All of your transactions will be removed</div>
            </div>
            <button className="btn-error btn-sm btn border-0  bg-rose-600/60  text-rose-50 hover:bg-rose-600/80 hover:text-rose-100 " onClick={handleTransactionDelete}>
              Clear data
            </button>
          </div>
          <div className="divider my-5 before:bg-rose-800/20 after:bg-rose-800/20 "></div>
          <div className=" flex items-end justify-between">
            <div>
              <div className=" text-md font-bold text-gray-300">Delete acount</div>
              <div className=" text-md  text-gray-300">Your data will be removed entirely</div>
            </div>
            <button className="btn-error btn-sm btn  border-0 bg-rose-600/60 text-rose-50 hover:bg-rose-600/80 hover:text-rose-100 " onClick={handleAcountDelete}>
              Delete acount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
