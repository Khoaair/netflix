import React, { useEffect, useState } from 'react';
import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import axios from 'axios';

export default function WidgetSm() {
  const url = 'http://localhost:8800/api/';
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(`${url}users?new=true`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWY0ZTAzY2E0NGIwZTI4MDEwYjRiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDMxMDM4NSwiZXhwIjoxNjg0NzQyMzg1fQ.qpVNJEs4DCBzfWoRvEDAWa6viL4PR-v-nJksbxQ-zBs',
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  console.log(newUsers);
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
