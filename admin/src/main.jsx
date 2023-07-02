import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './context/authContext/AuthContext.jsx';
import { ListsContextProvider } from './context/listContext/ListContext.jsx';
import { MoviesContextProvider } from './context/movieContext/MovieContext.jsx';
import { UsersContextProvider } from './context/userContext/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ListsContextProvider>
      <MoviesContextProvider>
        <UsersContextProvider>
          <App />
        </UsersContextProvider>
      </MoviesContextProvider>
    </ListsContextProvider>
  </AuthContextProvider>
);
