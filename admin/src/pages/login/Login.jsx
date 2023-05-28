import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext/authContext';
import './login.css';
import { login } from '../../context/authContext/apiCalls';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    console.log('login');
    login({ email, password }, dispatch);
  };
  return (
    <div className='login'>
      <form className='loginForm'>
        <label htmlFor='email' className='loginLabel'>
          Login
        </label>
        <input
          type='email'
          className='loginInput'
          placeholder='email'
          id='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='loginInput'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className='loginButton'
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
