import { Visibility } from '@mui/icons-material';

const WidgetSm = () => {
  return (
    <div className='flex-[1] shadow-md p-5'>
      <span className='text-xl font-semibold'>New Join Members</span>
      <ul className='m-0 p-0'>
        <li className='flex items-center justify-between my-5'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt=' '
            className='w-10 h-10 rounded-full object-cover'
          />
          <div className='flex flex-col'>
            <span className='font-semibold'>Anna Keller</span>
            <span className='font-light'>Software Engineer</span>
          </div>
          <button className='flex items-center gap-2 bg-[#eeeef7] text-[#555] rounded-[10px] px-2 py-1'>
            <Visibility style={{ width: '1rem', height: '1rem' }} />
            Display
          </button>
        </li>
        <li className='flex items-center justify-between mx-5'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt=' '
            className='w-10 h-10 rounded-full object-cover'
          />
          <div>
            <span>Anna Keller</span>
            <span>Software Engineer</span>
          </div>
          <button>
            <Visibility />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};
export default WidgetSm;
