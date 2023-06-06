/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { userAvatar, dropdown } from '../utils/avatar';
import { AuthContext } from '../context/authContext/authContext';
import { logoutUser } from '../context/authContext/apiCalls';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  };

  const handleSignOut = e => {
    e.preventDefault();
    navigate('/register');
    logoutUser(dispatch);
  };

  return (
    <div className='profile'>
      <div
        type='button'
        className='-ml-4'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>{isHovered ? <ArrowDropUp /> : <ArrowDropDown />}</div>
      </div>
      {isHovered && (
        <div className='options'>
          <div className='absolute -right-[2px] -top-[15px] text-sm'>
            <ArrowDropUp />
          </div>
          <div>
            {userAvatar.map(items => {
              const { id, avatar, name } = items;
              return (
                <span key={id} className='flex items-center gap-[10px] mb-3'>
                  <img
                    src={avatar}
                    alt='logo'
                    className='nav-avatar flex items-center justify-center'
                  />
                  <span>{name}</span>
                </span>
              );
            })}
          </div>
          <div className='flex flex-col gap-3'>
            {dropdown.map(items => {
              const { id, text, path, icon } = items;
              return (
                <div key={id} className='flex items-center gap-[10px]'>
                  <span className='text-[20px] ml-1'>{icon}</span>
                  <span className='text-[13px]'>{text}</span>
                </div>
              );
            })}
          </div>
          <hr className='mt-3' />
          <button
            className='flex items-center justify-center text-[13px] px-[10px] pt-4'
            onClick={handleSignOut}
          >
            Sign out of Netflix
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
