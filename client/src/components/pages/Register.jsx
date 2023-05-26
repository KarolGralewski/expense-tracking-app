import React from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-900  text-white">
      <div className="flex">
        <div className="mb-3  text-6xl font-bold text-lime-400">Expense Tracker</div>
      </div>
      <div className="font-md mb-8 text-3xl">Track your expanses with ease</div>

      <form className="mb-4 w-2/3  max-w-lg rounded-md bg-slate-800  px-8 pt-8 shadow-md">
        <h1 className="mb-5 text-2xl font-bold">Register</h1>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-slate-300" for="username">
            Username
          </label>
          <input className="focus:shadow-outline w-full  appearance-none rounded  bg-slate-700  px-3 py-3 leading-tight shadow focus:outline-none" id="username" type="text" placeholder="Username"></input>
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-slate-300" for="name">
            Name
          </label>
          <input className="focus:shadow-outline w-full  appearance-none rounded  bg-slate-700  px-3 py-3 leading-tight shadow focus:outline-none" id="name" type="text" placeholder="Name"></input>
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-slate-300" for="password">
            Password
          </label>
          <input className="focus:shadow-outline  appearance-none0 mb-3 w-full rounded  border-red-500 bg-slate-700 px-3 py-3 leading-tight shadow focus:outline-none" id="password" type="password" placeholder="Password"></input>
          {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
        </div>
        <div className="mb-10">
          <label className="mb-2 block text-sm font-bold text-slate-300" for="repeatPassword">
            Repeat password
          </label>
          <input className="focus:shadow-outline w-full  appearance-none rounded  bg-slate-700  px-3 py-3 leading-tight shadow focus:outline-none" id="repeatPassword" type="password" placeholder="Repeat password"></input>
        </div>
        <div className="flex flex-col items-center justify-between">
          <button className="focus:shadow-outline text-s rounded bg-lime-500 px-10 py-2  font-light text-white hover:bg-lime-600 focus:outline-none" type="button">
            Sign In
          </button>

          <Link to={'/login'}>
            <h1 className="my-8 text-sm font-light">
              Already have an accout? <span className="font-semibold">Log in</span>
            </h1>
          </Link>
        </div>
      </form>
    </div>
  );
};
