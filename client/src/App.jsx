/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Watch from './Pages/Watch';
import Register from './Pages/Register';
import Login from './Pages/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
