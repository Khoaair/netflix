import SharedLayout from './components/SharedLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import Home from './pages/Home';
import UserList from './pages/UserList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
