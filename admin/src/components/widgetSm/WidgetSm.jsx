import React, { useContext, useEffect, useState } from 'react';
import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import axios from 'axios';
import { AuthContext } from '../../context/authContext/authContext';

export default function WidgetSm() {
  const url = 'http://localhost:8800/api/';
  const [newUsers, setNewUsers] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(`${url}users?new=true`, {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, [user.accessToken]);

  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {newUsers.map((user, index) => {
          return (
            <li key={index} className='widgetSmListItem'>
              <img
                src={
                  user.profilePic ||
                  'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                }
                alt=''
                className='widgetSmImg'
              />
              <div className='widgetSmUser'>
                <span className='widgetSmUsername'>{user.username}</span>
              </div>
              <button className='widgetSmButton'>
                <Visibility className='widgetSmIcon' />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
