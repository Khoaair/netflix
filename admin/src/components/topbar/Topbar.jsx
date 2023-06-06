import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/authContext';
import { logoutUser } from '../../context/authContext/apiCalls';

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const handleSignOut = e => {
    e.preventDefault();
    history.push('/login');
    logoutUser(dispatch);
  };

  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <Link to='/' className='logo'>
            admin
          </Link>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <div className='user'>
            <img
              src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='topAvatar'
            />
            <button className='sign-out' onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
