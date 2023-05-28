import React from 'react';
import { Heading } from '../atoms/Heading/Heading';
import { LoginForm } from '../templates/LoginForm/LoginForm';
import { Subheading } from '../atoms/Subheading/Subheading';

export const Login = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-900  text-white">
      <Heading text="💰" />
      <Heading text="Expense Tracker" />
      <Subheading text="Track your expanses with ease" />
      <LoginForm />
    </div>
  );
};
