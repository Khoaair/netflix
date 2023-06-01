import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext/authContext';
import { MoviesContextProvider } from './context/movieContext/MoviesContext';
import { ListsContextProvider } from './context/listContext/ListsContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MoviesContextProvider>
        <ListsContextProvider>
          <App />
        </ListsContextProvider>
      </MoviesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
