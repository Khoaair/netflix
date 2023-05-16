/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const user = false;
  return user ? <Outlet /> : <Navigate to='/register' />;
};

export default PrivateRoute;
