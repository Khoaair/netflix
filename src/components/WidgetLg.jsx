/* eslint-disable react/prop-types */
const WidgetLg = () => {
  const Button = ({ type, text }) => {
    return (
      <button className={`py-[5px] px-[7px] rounded-[10px] ${type}`}>
        {text}
      </button>
    );
  };
  return (
    <div className='flex-[2] shadow-md p-5'>
      <h3 className='text-xl font-semibold'>Latest transactions</h3>
      <table className='w-full border-separate border-spacing-5'>
        <thead>
          <tr>
            <th className='text-left font-medium'>Customer</th>
            <th className='text-left font-medium'>Date</th>
            <th className='text-left font-medium'>Amount</th>
            <th className='text-left font-medium'>Status</th>
          </tr>
          <tr>
            <td className='flex items-center font-semibold'>
              <img
                src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt=''
                className='w-10 h-10 rounded-full object-cover mr-2'
              />
              <span>Nicolas Tesla</span>
            </td>
            <td className='font-light'>2 Jun 2023</td>
            <td className='font-light'>$122.00</td>
            <td>
              <Button type='bg-[#e5faf2] text-[#3bb077]' text='Approved' />
            </td>
          </tr>
          <tr>
            <td className='flex items-center font-semibold'>
              <img
                src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt=''
                className='w-10 h-10 rounded-full object-cover mr-2'
              />
              <span>John Kenedy</span>
            </td>
            <td className='font-light'>2 Jun 2023</td>
            <td className='font-light'>$122.00</td>
            <td>
              <Button type='bg-[#ebf1fe] text-[#2a7ade]' text='Pending' />
            </td>
          </tr>
          <tr>
            <td className='flex items-center font-semibold'>
              <img
                src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt=''
                className='w-10 h-10 rounded-full object-cover mr-2'
              />
              <span>Susan Carol</span>
            </td>
            <td className='font-light'>2 Jun 2023</td>
            <td className='font-light'>$122.00</td>
            <td>
              <Button type='bg-[#fff0f1] text-[#d95087]' text='Declined' />
            </td>
          </tr>
          <tr>
            <td className='flex items-center font-semibold'>
              <img
                src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt=''
                className='w-10 h-10 rounded-full object-cover mr-2'
              />
              <span>Susan Carol</span>
            </td>
            <td className='font-light'>2 Jun 2023</td>
            <td className='font-light'>$122.00</td>
            <td>
              <Button type='bg-[#e5faf2] text-[#3bb077]' text='Approved' />
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default WidgetLg;
