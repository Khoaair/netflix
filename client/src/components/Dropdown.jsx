/* eslint-disable no-unused-vars */
import React from 'react';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { userAvatar, dropdown } from '../utils/avatar';

const Dropdown = () => {
  return (
    <div className='profile'>
      <button type='button'>
        <ArrowDropDown />
      </button>
      <div className='options'>
        <div className='absolute top-[49px] right-24 text-sm'>
          <ArrowDropUp />
        </div>
        <div>
          {userAvatar.map(items => {
            const { id, path, avatar, name } = items;
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
    </div>
  );
};

export default Dropdown;
