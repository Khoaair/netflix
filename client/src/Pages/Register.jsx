/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import customFetch from '../utils/axios';

const register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const navigate = useNavigate();

  const handleStart = () => {
    setUsername(usernameRef.current.value);
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  const handleRegister = async e => {
    e.preventDefault();
    try {
      await customFetch.post('auth/register', { email, username, password });
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <img
            className='logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
          />
          <Link to='/login' className='loginButton'>
            sign in
          </Link>
        </div>
      </div>
      <div className='ResContainer'>
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancle anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className='input'>
            <input type='username' placeholder='username' ref={usernameRef} />
            <input type='email' placeholder='email address' ref={emailRef} />
            <button className='registerButton' onClick={handleStart}>
              Get Started{' '}
            </button>
          </div>
        ) : (
          <form className='input' onSubmit={handleRegister}>
            <input type='password' placeholder='password' ref={passwordRef} />
            <button className='registerButton' onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default register;
