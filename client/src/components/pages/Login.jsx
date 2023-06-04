import React from 'react';
import { Heading } from '../atoms/Heading/Heading';
import { LoginForm } from '../templates/LoginForm/LoginForm';
import { Subheading } from '../atoms/Subheading/Subheading';

export const Login = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900  text-white">
      <Heading>Expense Tracker</Heading>
      <Subheading text="Track your expenses with ease" />
      <LoginForm />
    </div>
  );
};
