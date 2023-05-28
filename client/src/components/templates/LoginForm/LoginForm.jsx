import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Spacer } from '../../atoms/Spacer/Spacer';
import { Button } from '../../atoms/Button/Button';

import { InputLabel } from '../../molecules/InputLabel/InputLabel';
import { Text } from '../../atoms/Text/Text';

export const LoginForm = () => {
  console;

  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/auth';
      const { data: res } = await axios.post(url, data);
      localStorage.setItem('token', res.data);
      window.location = '/';
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 w-2/3  max-w-lg  rounded-md bg-slate-800 px-8 pt-8 shadow-md">
      <h1 className="mb-5 text-2xl font-bold">Log in</h1>
      <Spacer />
      <InputLabel labelText="Email" name="email" type="text" placeholder="Email" onChange={handleChange} />
      <Spacer />
      <InputLabel labelText="Password" name="password" type="password" placeholder="Password" onChange={handleChange} />

      <div className="mt-10 flex flex-col items-center justify-between">
        <Button isPrimary type="submit" text="Log In" />

        <Link to={'/register'}>
          <h1 className="my-7 text-sm font-light">
            Don't have account yet? <span className="font-semibold">Register</span>
          </h1>
        </Link>
      </div>
    </form>
  );
};
