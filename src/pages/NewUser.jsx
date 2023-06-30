const NewUser = () => {
  return (
    <div className='flex-[4]'>
      <h1 className='text-3xl font-semibold'>New User</h1>
      <form className='flex flex-wrap'>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151,150,150)]'>
            Username
          </label>
          <input
            type='text'
            placeholder='NganNguyen'
            className='h-5 p-5 border border-gray-500 rounded-[5px]'
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151,150,150)]'>
            Name
          </label>
          <input
            type='text'
            placeholder='Hoang Ngan'
            className='h-5 p-5 border border-gray-500 rounded-[5px]'
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151,150,150)]'>
            Email
          </label>
          <input
            type='email'
            placeholder='HoangNgan@gmail.com'
            className='h-5 p-5 border border-gray-500 rounded-[5px]'
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151,150,150)]'>
            Password
          </label>
          <input
            type='password'
            placeholder='password'
            className='h-5 p-5 border border-gray-500 rounded-[5px]'
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151,150,150)]'>
            Phone
          </label>
          <input
            type='text'
            placeholder='+1 123 456 78'
            className='h-5 p-5 border border-gray-500 rounded-[5px]'
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151,150,150)]'>
            Address
          </label>
          <input
            type='text'
            placeholder='Ho Chi Minh | Viet Nam'
            className='h-5 p-5 border border-gray-500 rounded-[5px]'
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151,150,150)]'>
            Gender
          </label>
          <div>
            <input
              type='radio'
              name='gender'
              id='male'
              value='male'
              className='mt-[15px]'
            />
            <label htmlFor='male' className='m-[10px] text-lg text-[#555}'>
              Male
            </label>
            <input
              type='radio'
              name='gender'
              id='female'
              value='female'
              className='mt-[15px]'
            />
            <label htmlFor='female' className='m-[10px] text-lg text-[#555}'>
              Female
            </label>
            <input
              type='radio'
              name='gender'
              id='other'
              value='other'
              className='mt-[15px]'
            />
            <label htmlFor='other' className='m-[10px] text-lg text-[#555}'>
              Other
            </label>
          </div>
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151,150,150)]'>
            Admin
          </label>
          <select
            name='admin'
            id='admin'
            className='h-10 p-2 border boder-gray-500 rounded-[5px] text-sm text-[rgb(151,150,150)]'
          >
            <option>Is Admin?</option>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <button className='w-[200px] bg-blue-900 text-white px-[10px] py-[7px] font-semibold rounded-[10px] mt-[30px] cursor-pointer text-sm'>
          Create
        </button>
      </form>
    </div>
  );
};
export default NewUser;
