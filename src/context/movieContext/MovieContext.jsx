/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import MoviesReducer from './MoviesReducer';

const initialState = {
  movies: [],
  isFeching: false,
  error: false,
};

export const MoviesContext = createContext(initialState);

export const MoviesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  return (
    <MoviesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};
