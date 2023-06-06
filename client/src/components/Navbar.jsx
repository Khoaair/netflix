/* eslint-disable no-unused-vars */
import { Search, Notifications } from '@mui/icons-material';
import React, { useState } from 'react';
import { avatar, user } from '../utils/avatar';
import { Link } from 'react-router-dom';
import { headerLinks } from '../utils/Links';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <nav
      className={isScrolled ? 'nav-container nav-scrolled' : 'nav-container'}
    >
      <div className='nav-left'>
        <Link to='/'>
          <img className='nav-logo' src={avatar} alt='Netflix Logo' />
        </Link>
        <div className='flex items-center justify-center gap-[20px] hover:cursor-pointer'>
          {headerLinks.map(items => {
            const { id, path, text, className } = items;
            return (
              <Link key={id} to={path} className={className}>
                <span>{text}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className='nav-right'>
        <div className='flex items-center md:hidden'>
          <Search />
          <Notifications />
        </div>
        <div className='flex items-center'>
          <span>
            <img src={user} alt='avatar' className='nav-avatar' />
          </span>
        </div>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
