import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { updateMovie } from '../context/movieContext/apiCalls';
import { MoviesContext } from '../context/movieContext/MovieContext';
import { Publish } from '@mui/icons-material';

const Movie = () => {
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
        <Link to='/newMovie'>
          <button className='w-20 p-[5px] bg-teal-500 text-white rounded-[5px] text-base cursor-pointer'>
            Create
          </button>
        </Link>
      </div>
      <div className='flex'>
        <div className='flex-[1]'>
          <div className='flex items-center'>
            <img
              src={movie.img}
              alt=''
              className='w-10 h-10 rounded-full object-cover mr-5'
            />
            <span className='font-semibold'>{movie.title}</span>
          </div>
          <div className='mt-[10px]'>
            <div className='w-[150px] flex justify-between gap-5'>
              <span>id:</span>
              <span className='font-light'>{movie._id}</span>
            </div>
            <div className='w-[150px] flex justify-between gap-5 '>
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
      <div className='mt-[10px]'>
        <form className='flex justify-between'>
          <div className='flex flex-col'>
            <label className='mb-[10px] text-gray-500'>Movie Title</label>
            <input
              type='text'
              placeholder={movie.title}
              name='title'
              onChange={handleChange}
              className='mb-[10px] p-[5px] border-b-gray-500'
            />
            <label className='mb-[10px] text-gray-500'>Year</label>
            <input
              type='text'
              placeholder={movie.year}
              name='year'
              onChange={handleChange}
            />
            <label className='mb-[10px] text-gray-500'>Genre</label>
            <input
              type='text'
              placeholder={movie.genre}
              name='genre'
              onChange={handleChange}
            />
            <label className='mb-[10px] text-gray-500'>Limit</label>
            <input
              type='text'
              placeholder={movie.limit}
              name='limit'
              onChange={handleChange}
            />
            <label className='mb-[10px] text-gray-500'>Trailer</label>
            <input type='file' placeholder={movie.trailer} name='trailer' />
            <label className='mb-[10px] text-gray-500'>Video</label>
            <input type='file' placeholder={movie.video} name='video' />
          </div>
          <div className='flex flex-col justify-around'>
            <div className='flex items-center'>
              <img
                src={movie.img}
                alt=''
                className='w-[100px] h-[100px] rounded-[10px] object-cover mr-5'
              />
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button
              className='p-[5px] rounded-[5px] bg-blue-900 text-white font-semibold cursor-pointer'
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

export default Movie;
