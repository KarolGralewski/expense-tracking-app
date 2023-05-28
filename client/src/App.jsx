import { Route, Routes, Navigate } from 'react-router-dom';

import { Login } from './components/pages/Login';
import { Home } from './components/pages/Home';
import { Register } from './components/pages/Register';

function App() {
  const user = localStorage.getItem('token');

  return (
    <Routes>
      {user && <Route path="/" exact element={<Home />} />}
      <Route path="/register" exact element={<Register />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}
export default App;
