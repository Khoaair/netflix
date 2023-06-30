import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const FeatureInfo = () => {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex-1 mx-5 p-7 rounded-[10px] shadow-md'>
        <span className='text-xl'>Revanue</span>
        <div className='my-2 flex items-center'>
          <span className='text-3xl font-semibold'>$2.415</span>
          <span className='flex items-center ml-5'>
            -11.4 <ArrowDownward className='text-sm ml-1 text-red-500' />
          </span>
        </div>
        <span className='text-sm text-gray-500'>Compared to last month</span>
      </div>
      <div className='flex-1 mx-5 p-7 rounded-[10px] shadow-md'>
        <span className='text-xl'>Sales</span>
        <div className='my-2 flex items-center'>
          <span className='text-3xl font-semibold'>$4,415</span>
          <span className='flex items-center ml-5'>
            -1.4 <ArrowDownward className='text-sm ml-1 text-red-500' />
          </span>
        </div>
        <span className='text-sm text-gray-500'>Compared to last month</span>
      </div>
      <div className='flex-1 mx-5 p-7 rounded-[10px] shadow-md'>
        <span className='text-xl'>Cost</span>
        <div className='my-2 flex items-center'>
          <span className='text-3xl font-semibold'>$2.225</span>
          <span className='flex items-center ml-5'>
            -11.4 <ArrowUpward className='text-sm ml-1 text-green-500' />
          </span>
        </div>
        <span className='text-sm text-gray-500'>Compared to last month</span>
      </div>
    </div>
  );
};
export default FeatureInfo;
