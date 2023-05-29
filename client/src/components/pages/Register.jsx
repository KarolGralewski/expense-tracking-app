import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../templates/LoginForm/RegisterForm';
import { Heading } from '../atoms/Heading/Heading';

export const Register = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gray-950 p-10  text-white">
      <Heading>Expense Tracker</Heading>
      <div className="font-md mb-8 text-3xl">Track your expanses with ease</div>
      <RegisterForm />
    </div>
  );
};
