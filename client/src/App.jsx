/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Home, Watch, Error, Login, Register } from './Pages';
import { AuthContext } from './context/authContext/authContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={user ? <Home /> : <Navigate to='/register' />}
        />
        <Route path='/movies' element={<Home type='movie' />} />
        <Route path='/series' element={<Home type='series' />} />
        <Route path='/watch' element={<Watch />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' theme='colored' />
    </BrowserRouter>
  );
}

export default App;
