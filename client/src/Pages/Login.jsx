/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { login } from '../context/authContext/apiCalls';
import { AuthContext } from '../context/authContext/authContext';

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  };

  const [user, setUser] = useState(initialState);
  const { dispatch, user: loginUser } = useContext(AuthContext);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    loginUser && <Navigate to='/' />;
  }, [loginUser]);

  const handleLogin = e => {
    e.preventDefault();
    login(user, dispatch);
  };

  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <img
            className='logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
          />
        </div>
      </div>
      <div className='LoginContainer'>
        <div className='login-content'>
          <h1>Sign In</h1>
          <form>
            <input
              type='email'
              placeholder='email or phone number'
              name='email'
              value={user.email}
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='password'
              name='password'
              value={user.password}
              onChange={handleChange}
            />
            <button className='loginButton' onClick={handleLogin}>
              Sign In
            </button>
            <div className='form-help'>
              <div>
                <input type='checkbox' /> <label>Remember me</label>
              </div>
              <p>need help?</p>
            </div>
          </form>
          <div className='bottom'>
            <span>
              New to Netflix? <b>Sign up now.</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
