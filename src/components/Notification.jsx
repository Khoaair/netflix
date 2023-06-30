import { Link } from 'react-router-dom';
import { notification } from '../utils/menuList';
const Notification = () => {
  return (
    <div className='mb-2'>
      <h3 className='text-sm font-semibold text-[rgb(187,186,186)]'>
        Notification
      </h3>
      <ul className='p-1'>
        {notification.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              <li className='p-1 flex items-center gap-1 rounded-lg cursor-pointer hover:bg-[rgb(240,240,255)]'>
                {item.icon}
                {item.text}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default Notification;
