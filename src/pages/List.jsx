import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const List = () => {
  const location = useLocation();
  const { list } = location.state;

  const [movieUpdate, setMovieUpdate] = useState(null);

  const handleChange = e => {
    let value = e.target.value;
    setMovieUpdate({ ...movieUpdate, [e.target.name]: value });
  };

  const handleUpdate = e => {
    e.preventDefault();
  };

  return (
    <div className='flex-[4] p-5'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>List</h1>
        <Link to='/newList'>
          <button className='w-20 p-[5px] bg-teal-700 text-white rounded-md text-base'>
            Create
          </button>
        </Link>
      </div>
      <div className='flex'>
        <div className='flex-[1] p-5 m-5 shadow-md'>
          <div className='flex items-center'>
            <span className='font-semibold'>{list.title}</span>
          </div>
          <div className='mt-2'>
            <div className='w-[150px] flex justify-between gap-5'>
              <span>id:</span>
              <span className='font-light'>{list._id}</span>
            </div>
            <div className='w-[150px] flex justify-between gap-5'>
              <span>genre:</span>
              <span className='font-light'>{list.genre}</span>
            </div>
            <div className='w-[150px] flex justify-between gap-5'>
              <span>type:</span>
              <span className='font-light'>{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-[1] p-5 m-5 shadow-md'>
        <form className='flex justify-between'>
          <div className='flex flex-col'>
            <label className='mb-2 text-gray-600'>List Title</label>
            <input
              className='mb-2 p-1 border-b border-b-gray-500'
              type='text'
              placeholder={list.title}
              name='title'
              onChange={handleChange}
            />
            <label className='mb-2 text-gray-600'>Genre</label>
            <input
              className='mb-2 p-1 border-b border-b-gray-500'
              type='text'
              placeholder={list.genre}
              name='genre'
              onChange={handleChange}
            />
            <label className='mb-2 text-gray-600'>Type</label>
            <input
              className='mb-2 p-1 border-b border-b-gray-500'
              type='text'
              placeholder={list.type}
              name='type'
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col justify-around'>
            <button
              className='text-sm p-2 rounded-md bg-blue-900 text-white font-semibold'
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default List;
