import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='p-5 flex-[4]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Edit User</h1>
        <Link
          to='/newUser'
          className='w-20 p-1 text-base bg-teal-600 text-white rounded-[5px] text-center'
        >
          Create
        </Link>
      </div>
      <div className='flex gap-5 mt-5'>
        <div className='flex-[1] p-5 shadow-md'>
          <div className='flex items-center gap-5'>
            <img
              src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='w-10 h-10 rounded-full object-cover'
            />
            <div className='flex flex-col'>
              <span className='font-semibold'>Khoa Air</span>
              <span className='font-light'>Software Engineer</span>
            </div>
          </div>
          <div className='mt-5'>
            <span className='text-sm font-semibold text-[rgb(175,170,170)]'>
              Account Details
            </span>
            <div className='flex items-center mt-5 text-[#444] gap-2'>
              <PermIdentity sx={{ fontSize: 'medium' }} />
              <span>khoaair71</span>
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
              <span>khoaair@gmail.com</span>
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
                  placeholder='khoaair71'
                  className='w-[250px] h-[30px] border-b-[1px] border-gray-500 placeholder:pl-1 placeholder:text-sm'
                />
              </div>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Admin</label>
                <select className='w-[250px] h-[30px] border-b-[1px] border-gray-500 placeholder:pl-1 placeholder:text-sm text-sm'>
                  <option>Is Admin?</option>
                  <option value='true'>Yes</option>
                  <option value='false'>No</option>
                </select>
              </div>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Email</label>
                <input
                  type='email'
                  placeholder='khoaair@gmail.com'
                  className='w-[250px] h-[30px] border-b-[1px] border-gray-500 placeholder:pl-1 placeholder:text-sm'
                />
              </div>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Phone</label>
                <input
                  type='text'
                  placeholder='+1 123 456 67'
                  className='w-[250px] h-[30px] border-b-[1px] border-gray-500 placeholder:pl-1 placeholder:text-sm'
                />
              </div>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Address</label>
                <input
                  type='text'
                  placeholder='Ho Chi Minh | Viet Nam'
                  className='w-[250px] h-[30px] border-b-[1px] border-gray-500 placeholder:pl-1 placeholder:text-sm'
                />
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <div className='flex items-center'>
                <img
                  src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                  className='w-24 h-24 rounded-[10px] object-cover mr-5'
                />
                <label htmlFor='file'>
                  <Publish className='cursor-pointer' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='rounded-[5px] p-[5px] cursor-pointer bg-blue-900 text-white font-semibold'>
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
