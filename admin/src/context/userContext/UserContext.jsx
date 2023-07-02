/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import UsersReducer from './UserReducer';

const initialState = {
  users: [],
  isFetching: false,
  error: false,
};

export const UsersContext = createContext(initialState);

export const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UsersReducer, initialState);

  return (
    <UsersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};
