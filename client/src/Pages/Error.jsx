import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='w-full h-[100vh] text-3xl text-black flex justify-center items-center bg-white '>
      Lost your way(will design later)
      <Link to='/' className='text-amber-500 text-2xl'>
        Back Home
      </Link>
    </div>
  );
};

export default Error;
