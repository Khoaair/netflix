import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from '@mui/icons-material';

const User = () => {
  return (
    <div className='p-5'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Edit User</h1>
        <button className='w-20 p-1 text-base bg-teal-600 text-white rounded-[5px]'>
          Create
        </button>
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
            <div className='flex items-center mt-5 text-[#444] gap-5'>
              <PermIdentity className='w-5 h-5' />
              <span>khoaair71</span>
            </div>
            <div className='flex items-center mt-5 text-[#444] gap-5 mb-5'>
              <div id='icon'>
                <CalendarToday sx={{ fontSize: 'small' }} />
              </div>
              <span>07.01.2000</span>
            </div>
            <span className='text-sm font-semibold text-[rgb(175,170,170)]'>
              Contact Details
            </span>
            <div className='flex items-center mt-5 text-[#444] gap-5'>
              <PhoneAndroid className='w-5 h-5 !important' />
              <span>+1 123 456 67</span>
            </div>
            <div className='flex items-center mt-5 text-[#444] gap-5'>
              <MailOutline className='w-5 h-5 !important' />
              <span>khoaair@gmail.com</span>
            </div>
            <div className='flex items-center mt-5 text-[#444] gap-5'>
              <LocationSearching className='w-5 h-5 !important' />
              <span>Ho Chi Minh | Viet Nam</span>
            </div>
          </div>
        </div>
        <div className='flex-[2] p-5 shadow-md'></div>
      </div>
    </div>
  );
};
export default User;
