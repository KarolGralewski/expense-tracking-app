import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/hello') // Make a GET request to the '/api/hello' endpoint
      .then((response) => {
        setMessage(response.data.message); // Update the state with the received message
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-800">
      <h1 className="text-3xl font-bold text-cyan-400">Odpowiedź z serwera: {message}</h1>
    </div>
  );
}

export default App;
