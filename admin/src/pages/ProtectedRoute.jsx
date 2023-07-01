/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext/AuthContext';
import { useContext } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to='/login' />;
  }
  return children;
};
export default ProtectedRoute;
