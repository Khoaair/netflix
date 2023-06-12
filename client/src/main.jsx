import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './context/authContext/authContext.jsx';
import { TypeGenreContextProvider } from './context/typeGenreContext/typeGenreContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TypeGenreContextProvider>
        <App />
      </TypeGenreContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
