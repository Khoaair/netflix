import React, { useContext } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import ListList from './pages/listList/ListList';
import NewList from './pages/newList/NewList';
import { AuthContext } from './context/authContext/authContext';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import List from './pages/list/List';
import { ToastContainer } from 'react-toastify';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
        {!user && <Redirect to='/login' />}
        {user && (
          <>
            <Topbar />
            <div className='container'>
              <Sidebar />
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/users'>
                <UserList />
              </Route>
              <Route path='/user/:userId'>
                <User />
              </Route>
              <Route path='/newUser'>
                <NewUser />
              </Route>
              <Route path='/products'>
                <ProductList />
              </Route>
              <Route path='/product/:productId'>
                <Product />
              </Route>
              <Route path='/newproduct'>
                <NewProduct />
              </Route>
              <Route path='/lists'>
                <ListList />
              </Route>
              <Route path='/list/:listId'>
                <List />
              </Route>
              <Route path='/newList'>
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
      <ToastContainer position='top-center' theme='colored' />
    </Router>
  );
}

export default App;
