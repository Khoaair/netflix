import { Visibility } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import customFetch from '../utils/axios';
import { getAccessToken } from '../utils/getAccessToken';

const WidgetSm = () => {
  const [newUser, setNewUser] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await customFetch.get('users?new=true', {
          headers: {
            token: getAccessToken(),
          },
        });
        setNewUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className='flex-[1] shadow-md p-5'>
      <span className='text-xl font-semibold'>New Join Members</span>
      <ul className='m-0 p-0'>
        {newUser.map((user, index) => {
          return (
            <li key={index} className='flex items-center justify-between my-5'>
              <img
                src={
                  user.profilePic ||
                  'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                }
                alt=' '
                className='w-10 h-10 rounded-full object-cover'
              />
              <div className='flex flex-col'>
                <span className='font-semibold'>{user.username}</span>
              </div>
              <button className='flex items-center gap-2 bg-[#eeeef7] text-[#555] rounded-[10px] px-2 py-1'>
                <Visibility style={{ width: '1rem', height: '1rem' }} />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default WidgetSm;
