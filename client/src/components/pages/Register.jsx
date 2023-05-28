import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../templates/LoginForm/RegisterForm';

export const Register = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-900  text-white">
      <div className="text-6xl ">💰</div>

      <div className="mb-3  text-6xl font-bold text-yellow-400"> Expense Tracker</div>
      <div className="font-md mb-8 text-3xl">Track your expanses with ease</div>

      <RegisterForm />
    </div>
  );
};
