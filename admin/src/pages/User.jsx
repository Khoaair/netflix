import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { UsersContext } from '../context/userContext/UserContext';
import { useContext, useState } from 'react';
import { updateUser } from '../context/userContext/apiCalls';

const User = () => {
  const location = useLocation();
  const { user } = location.state;

  const [userUpdate, setUserUpdate] = useState([]);

  const { dispatch } = useContext(UsersContext);

  const handleChange = e => {
    const value = e.target.value;
    setUserUpdate({ ...userUpdate, [e.target.name]: value });
  };

  const handleUpdate = e => {
    e.preventDefault();
    updateUser(user._id, userUpdate, dispatch);
  };

  return (
    <div className='p-5 flex-[4]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Edit User</h1>
      </div>
      <div className='flex gap-5 mt-5'>
        <div className='flex-[1] p-5 shadow-md'>
          <div className='flex items-center gap-5'>
            <img
              src='https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQbPHLHMADSYHIjUxUrTHwEeJXOX-rF9NpbKyfLmXJnukropAUAR-faZGpu9eIgjUKX5udaZMo6Wze-ifSqCOKW7CfizWSlYJg.png?r=eea'
              alt=''
              className='w-10 h-10 rounded-full object-cover'
            />
            <div className='flex flex-col'>
              <span className='font-semibold'>{user.username}</span>
              <span className='font-light'>Software Engineer</span>
            </div>
          </div>
          <div className='mt-5'>
            <span className='text-sm font-semibold text-[rgb(175,170,170)]'>
              Account Details
            </span>
            <div className='flex items-center mt-5 text-[#444] gap-2'>
              <PermIdentity sx={{ fontSize: 'medium' }} />
              <span>{user.username}</span>
            </div>
            <div className='flex items-center mt-5 text-[#444] gap-2 mb-5'>
              <div id='icon'>
                <CalendarToday sx={{ fontSize: 'medium' }} />
              </div>
              <span>07.01.2000</span>
            </div>
            <span className='text-sm font-semibold text-[rgb(175,170,170)]'>
              Contact Details
            </span>
            <div className='flex items-center mt-5 text-[#444] gap-2'>
              <PhoneAndroid sx={{ fontSize: 'medium' }} />
              <span>+1 123 456 67</span>
            </div>
            <div className='flex items-center mt-5 text-[#444] gap-2'>
              <MailOutline sx={{ fontSize: 'medium' }} />
              <span>{user.email}</span>
            </div>
            <div className='flex items-center mt-5 text-[#444] gap-2'>
              <LocationSearching sx={{ fontSize: 'medium' }} />
              <span>Ho Chi Minh | Viet Nam</span>
            </div>
          </div>
        </div>
        <div className='flex-[2] p-5 shadow-md'>
          <span className='text-2xl font-semibold'>Edit</span>
          <form className='flex justify-between mt-5'>
            <div>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Username</label>
                <input
                  type='text'
                  placeholder={user.username}
                  className='w-[250px] h-[30px] border-b-[1px] border-gray-500 placeholder:pl-1 placeholder:text-sm'
                  name='username'
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Admin</label>
                <select
                  className='w-[250px] h-[30px] border-b-[1px] border-gray-500 placeholder:pl-1 placeholder:text-sm text-sm'
                  name='isAdmin'
                  onChange={handleChange}
                >
                  <option>Is Admin?</option>
                  <option value='true'>Yes</option>
                  <option value='false'>No</option>
                </select>
              </div>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Email</label>
                <input
                  type='email'
                  placeholder={user.email}
                  className='w-[250px] h-[30px] border-b-[1px] border-gray-500 placeholder:pl-1 placeholder:text-sm'
                  name='email'
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Password</label>
                <input
                  type='password'
                  placeholder='password'
                  className='w-[250px] h-[30px] border-b-[1px] border-gray-500 placeholder:pl-1 placeholder:text-sm'
                  name='password'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='flex flex-col justify-between self-end'>
              <button
                className='rounded-[5px] p-[5px] cursor-pointer bg-blue-900 text-white font-semibold '
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default User;
