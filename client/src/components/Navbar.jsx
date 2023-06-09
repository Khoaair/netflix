/* eslint-disable no-unused-vars */
import { Search, Notifications } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import { avatar, user } from '../utils/avatar';
import { Link } from 'react-router-dom';
import { headerLinks } from '../utils/Links';
import Dropdown from './Dropdown';
import { TypeGenreContext } from '../context/typeGenreContext/typeGenreContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const { setType, setGenre } = useContext(TypeGenreContext);

  return (
    <nav
      className={isScrolled ? 'nav-container nav-scrolled' : 'nav-container'}
    >
      <div className='nav-left'>
        <Link
          to='/'
          onClick={() => {
            setType(''), setGenre('');
          }}
        >
          <img className='nav-logo' src={avatar} alt='Netflix Logo' />
        </Link>
        <div className='flex gap-[20px] lg:flex lg:items-center lg:justify-center lg:gap-[20px]'>
          {headerLinks.map(items => {
            const { id, path, text, className, type, genre } = items;
            return (
              <Link
                key={id}
                to={path}
                className={className}
                onClick={() => {
                  setType(type);
                  setGenre(genre);
                }}
              >
                <span>{text}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className='nav-right'>
        <div className='hidden md:flex md:items-center md:gap-4'>
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
