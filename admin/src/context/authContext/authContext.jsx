import React from 'react';
import { useContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
