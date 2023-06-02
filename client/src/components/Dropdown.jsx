/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { userAvatar, dropdown } from '../utils/avatar';

const Dropdown = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (isHovered) {
      clearTimeout(timeoutId);
    } else {
      const newTimeoutId = setTimeout(() => {
        setIsHovered(false);
      }, 3000);
      setTimeoutId(newTimeoutId);
    }

    return () => clearTimeout(timeoutId);
  }, [timeoutId, isHovered]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const newTimeoutId = setTimeout(() => {
      setIsHovered(false);
    }, 3000);
    setTimeoutId(newTimeoutId);
  };

  console.log(timeoutId);

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
          <span className='flex items-center justify-center text-[13px] px-[10px] pt-4'>
            Sign out of Netflix
          </span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
