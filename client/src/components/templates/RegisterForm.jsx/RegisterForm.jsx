import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { InputLabel } from '../../molecules/InputLabel/InputLabel';
import { Spacer } from '../../atoms/Spacer/Spacer';
import { Button } from '../../atoms/Button/Button';
import { Alert } from '../../organisms/Alert/Alert';

export const RegisterForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://0.0.0.0:8080/api/users';
      const { data: res } = await axios.post(url, data);
      navigate('/login');
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <form className="mb-4 w-2/3  max-w-lg rounded-md bg-gray-800  px-8 pt-8 shadow-md" onSubmit={handleSubmit}>
      <h1 className="mb-5 text-2xl font-bold">Register</h1>
      <Spacer />
      <InputLabel labelText="First Name" name="firstName" type="text" placeholder="First Name" onChange={handleChange} />

      <Spacer />
      <InputLabel labelText="Last Name" name="lastName" type="text" placeholder="Last Name" onChange={handleChange} />

      <Spacer />
      <InputLabel labelText="Email" name="email" type="text" placeholder="Email" onChange={handleChange} />

      <Spacer />
      <InputLabel labelText="Password" name="password" type="password" placeholder="Password" onChange={handleChange} />

      <Spacer />

      {error && <Alert message={error} />}

      <div className="mt-10 flex flex-col items-center justify-between">
        <Button isPrimary type="submit" text="Sign In" />

        <Link to={'/login'}>
          <h1 className="my-7 text-sm font-light">
            Already have an accout? <span className="font-semibold">Log in</span>
          </h1>
        </Link>
      </div>
    </form>
  );
};
