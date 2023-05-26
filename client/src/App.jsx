import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router';
import { Login } from './components/pages/Login';

function App() {
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001') // Make a GET request to the '/api/hello' endpoint
  //     .then((response) => {
  //       setMessage(response.data.message); // Update the state with the received message
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return <></>;
}

export default App;
