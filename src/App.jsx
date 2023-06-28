import SharedLayout from './components/SharedLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  UserList,
  User,
  NewUser,
  MovieList,
  Movie,
  ListList,
  NewMovie,
  NewList,
  ProtectedRoute,
  Login,
  Error,
} from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/movies' element={<MovieList />} />
          <Route path='/movie/:movieId' element={<Movie />} />
          <Route path='/newMovie' element={<NewMovie />} />
          <Route path='/list' element={<ListList />} />
          <Route path='/newList' element={<NewList />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' theme='colored' />
    </Router>
  );
}

export default App;
