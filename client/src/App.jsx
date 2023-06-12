/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Home, Watch, Error, Login, Register } from './Pages';
import { AuthContext } from './context/authContext/authContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeGenreContext } from './context/typeGenreContext/typeGenreContext';

function App() {
  const { user } = useContext(AuthContext);
  const { type, setType, genre } = useContext(TypeGenreContext);

  const handleChangeType = type => {
    setType(type);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={user ? <Home type={type} /> : <Navigate to='/register' />}
        />
        <Route
          path='/movies'
          element={<Home type={type} />}
          onEnter={() => handleChangeType('movie')}
        />
        <Route
          path='/series'
          element={<Home type={type} />}
          onEnter={() => handleChangeType('series')}
        />
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
