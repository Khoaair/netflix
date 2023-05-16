/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Home, Watch, Error, Login, Register, PrivateRoute } from './Pages';

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/movies' element={<Home type='movies' />} />
        <Route path='/series' element={<Home type='series' />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/register' element={<PrivateRoute path='/register' />}>
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
