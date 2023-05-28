import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext/authContext';
import { MoviesContextProvider } from './context/movieContext/MoviesContext';

ReactDOM.render(
  <React.StrictMode>
    <MoviesContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MoviesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
