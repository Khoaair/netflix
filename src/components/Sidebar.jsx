import Dashboard from './Dashboard';
import Notification from './Notification';
import QuickMenu from './QuickMenu';
import Staff from './Staff';
const Sidebar = () => {
  return (
    <div className='bg-[rgb(251,251,255)] h-[calc(100vh-3rem)] sticky top-12'>
      <div className='p-5 text-[#555]'>
        <Dashboard />
        <QuickMenu />
        <Notification />
        <Staff />
      </div>
    </div>
  );
};
export default Sidebar;
