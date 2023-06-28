import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Publish } from '@mui/icons-material';
import { updateMovie } from '../context/movieContext/apiCalls';
import { MoviesContext } from '../context/movieContext/MovieContext';

export default function Product() {
  const location = useLocation();
  const { movie } = location.state;

  const { dispatch } = useContext(MoviesContext);

  const [movieUpdate, setMovieUpdate] = useState(null);

  const handleChange = e => {
    let value = e.target.value;
    setMovieUpdate({ ...movieUpdate, [e.target.name]: value });
  };

  const handleUpdate = e => {
    e.preventDefault();
    updateMovie(movie._id, movieUpdate, dispatch);
  };

  return (
    <div className='flex-[4] p-5'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-semibold'>Movie</h1>
        <Link to='/newproduct'>
          <button className='w-20 p-[5px] bg-teal-700 text-white rounded-md text-base'>
            Create
          </button>
        </Link>
      </div>
      <div className='flex'>
        <div className='flex-[1] p-5 m-5 shadow-md'>
          <div className='flex items-center gap-5'>
            <img
              src={movie.img}
              alt=''
              className='w-10 h-10 rounded-full object-cover'
            />
            <span className='font-semibold'>{movie.title}</span>
          </div>
          <div className='mt-2'>
            <div className='w-[150px] flex justify-between gap-5'>
              <span>id:</span>
              <span className='font-light'>{movie._id}</span>
            </div>
            <div className='w-[150px] flex justify-between gap-5'>
              <span>genre:</span>
              <span className='font-light'>{movie.genre}</span>
            </div>
            <div className='w-[150px] flex justify-between gap-5'>
              <span>year:</span>
              <span className='font-light'>{movie.year}</span>
            </div>
            <div className='w-[150px] flex justify-between gap-5'>
              <span>limit:</span>
              <span className='font-light'>{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='p-5 m-5 shadow-md'>
        <form className='flex justify-between'>
          <div className='flex flex-col'>
            <label className='mb-2 text-sm text-gray-600'>Movie Title</label>
            <input
              className='mb-2 p-[5px] border-b border-b-gray-500 text-sm'
              type='text'
              placeholder={movie.title}
              name='title'
              onChange={handleChange}
            />
            <label className='mb-2 text-sm text-gray-600'>Year</label>
            <input
              className='mb-2 p-[5px] border-b border-b-gray-500 text-sm'
              type='text'
              placeholder={movie.year}
              name='year'
              onChange={handleChange}
            />
            <label className='mb-2 text-sm text-gray-600'>Genre</label>
            <input
              className='mb-2 p-[5px] border-b border-b-gray-500 text-sm'
              type='text'
              placeholder={movie.genre}
              name='genre'
              onChange={handleChange}
            />
            <label className='mb-2 text-sm text-gray-600'>Limit</label>
            <input
              className='mb-2 p-[5px] border-b border-b-gray-500 text-sm'
              type='text'
              placeholder={movie.limit}
              name='limit'
              onChange={handleChange}
            />
            <label className='mb-2 text-sm text-gray-600'>Trailer</label>
            <input
              className='mb-2 p-[5px] border-b border-b-gray-500 text-sm'
              type='file'
              placeholder={movie.trailer}
              name='trailer'
            />
            <label className='mb-2 text-sm text-gray-600'>Video</label>
            <input
              className='mb-2 p-[5px] border-b border-b-gray-500 text-sm'
              type='file'
              placeholder={movie.video}
              name='video'
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex items-center gap-5'>
              <img
                src={movie.img}
                alt=''
                className='w-[100px] h-[100px] rounded-md object-cover'
              />
              <label htmlFor='file' className='cursor-pointer'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button
              className='p-[5px] rounded-md bg-blue-900 text-white text-sm font-semibold'
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
