import React from 'react';
import { createContext, useReducer } from 'react';
import ListsReducer from './ListsReducer';

const initialState = {
  lists: [],
  isFeching: false,
  error: false,
};

export const ListsContext = createContext(initialState);

export const ListsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ListsReducer, initialState);

  return (
    <ListsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ListsContext.Provider>
  );
};
