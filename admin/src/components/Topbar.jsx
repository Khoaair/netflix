import { Language, Logout, Settings } from '@mui/icons-material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext/AuthContext';
import { logoutUser } from '../context/authContext/apiCalls';
const Topbar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = e => {
    e.preventDefault();
    logoutUser(dispatch);
    navigate('/login');
  };
  return (
    <div className='w-full h-12 sticky top-0 z-50 bg-white text-lg'>
      <div className='h-full px-5 flex items-center justify-between'>
        <div>
          <Link to='/' className='font-bold text-3xl text-blue-900'>
            admin
          </Link>
        </div>
        <div className='flex items-center gap-2 text-gray-600 '>
          <div className='relative '>
            <NotificationsNoneIcon />
            <span className='w-4 h-4 absolute -top-1 -right-1 flex items-center justify-center bg-red-500 text-white rounded-full text-xs'>
              2
            </span>
          </div>
          <div>
            <Language />
          </div>
          <div>
            <Settings />
          </div>
          <img
            src='https://images.pexels.com/photos/6893933/pexels-photo-6893933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-10 h-10 rounded-full object-cover cursor-pointer'
          />
          <button onClick={handleSignOut}>
            <Logout />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
