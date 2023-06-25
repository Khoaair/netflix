import { quickMenu } from '../utils/menuList';
import { Link } from 'react-router-dom';
const QuickMenu = () => {
  return (
    <div className='mb-2'>
      <h3 className='text-sm font-semibold text-[rgb(187,186,186)]'>
        Quick Menu
      </h3>
      <ul className='p-1'>
        {quickMenu.map((item, index) => {
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
export default QuickMenu;
