import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <Topbar />
      <div className='flex mt-2'>
        <div className='flex-[1]'>
          <Sidebar />
        </div>
        <div className='flex-[4]'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default SharedLayout;
