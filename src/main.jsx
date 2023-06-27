import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './context/authContext/AuthContext.jsx';
import { ListsContextProvider } from './context/listContext/ListContext.jsx';
import { MoviesContextProvider } from './context/movieContext/MovieContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ListsContextProvider>
        <MoviesContextProvider>
          <App />
        </MoviesContextProvider>
      </ListsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
