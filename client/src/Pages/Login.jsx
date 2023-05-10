/* eslint-disable no-unused-vars */

import React, { useRef, useState } from 'react';

const register = () => {
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
            <input type='email' placeholder='email or phone number' />
            <input type='password' placeholder='password' />
            <button className='loginButton'>Sign In</button>
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

export default register;
