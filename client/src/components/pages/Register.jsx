import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../atoms/Heading/Heading';
import { Subheading } from '../atoms/Subheading/Subheading';
import { RegisterForm } from '../templates/RegisterForm.jsx/RegisterForm';

export const Register = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gray-900 p-10  text-white">
      <Heading>Expense Tracker</Heading>
      <Subheading text="Track your expenses with ease" />
      <RegisterForm />
    </div>
  );
};
