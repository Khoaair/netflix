/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Home, Watch, Error, Login, Register } from './Pages';

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={user ? <Home /> : <Navigate to='/register' />}
        />
        <Route path='/movies' element={<Home type='movies' />} />
        <Route path='/series' element={<Home type='series' />} />
        <Route path='/watch' element={<Watch />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
