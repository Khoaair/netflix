/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createContext, useState } from 'react';

export const TypeGenreContext = createContext();
export const TypeGenreContextProvider = ({ children }) => {
  const [type, setType] = useState('');
  const [genre, setGenre] = useState('');

  return (
    <TypeGenreContext.Provider value={{ type, setType, genre, setGenre }}>
      {children}
    </TypeGenreContext.Provider>
  );
};
