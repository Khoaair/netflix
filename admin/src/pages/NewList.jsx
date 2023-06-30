import { useContext, useEffect, useState } from 'react';
import { ListsContext } from '../context/listContext/ListContext';
import { MoviesContext } from '../context/movieContext/MovieContext';
import { getMovies } from '../context/movieContext/apiCalls';
import { createList } from '../context/listContext/apiCalls';
import { useNavigate } from 'react-router-dom';
const NewList = () => {
  const [list, setList] = useState(null);

  const { dispatch, isFetching } = useContext(ListsContext);
  const { dispatch: dispatchMovie, movies } = useContext(MoviesContext);
  const navigate = useNavigate();

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = e => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };
  console.log(list);
  const handleCreate = e => {
    e.preventDefault();
    createList(list, dispatch);
    navigate('/lists');
  };

  const handleSelect = e => {
    let value = Array.from(e.target.selectedOptions, option => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  return (
    <div className='flex-[4]'>
      <h1 className='text-xl font-semibold'>New List</h1>
      <form className='flex flex-wrap mt-[10px]'>
        <div className='formLeft'>
          <div className='w-[400px] flex flex-col mb-2 p-5'>
            <label className='text-gray-500 font-semibold mb-2'>Title</label>
            <input
              className='p-2 border border-gray-500'
              type='text'
              placeholder='Popular Movies'
              name='title'
              onChange={handleChange}
            />
          </div>
          <div className='w-[400px] flex flex-col mb-2 p-5'>
            <label className='text-gray-500 font-semibold mb-2'>Genre</label>
            <input
              className='p-2 border border-gray-500'
              type='text'
              placeholder='Action'
              name='genre'
              onChange={handleChange}
            />
          </div>
          <div className='w-[400px] flex flex-col mb-2 p-5'>
            <label className='text-gray-500 font-semibold mb-2'>Type</label>
            <select
              name='type'
              onChange={handleChange}
              className='p-2 border boder-gray-500'
            >
              <option>Type</option>
              <option value='movie'>Movie</option>
              <option value='series'>Series</option>
            </select>
          </div>
        </div>
        <div className='formRight'>
          <div className='w-[400px] flex flex-col mb-2 p-5'>
            <label className='text-gray-500 font-semibold mb-2'>Content</label>
            <select
              multiple
              name='content'
              onChange={handleSelect}
              style={{ height: '280px' }}
              className='border-gray-500 border'
            >
              {movies.map((movie, id) => {
                return (
                  <option key={id} value={movie._id}>
                    {movie.title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <button
          className='mt-2 px-3 py-2 text-sm rounded-lg bg-blue-900 text-white font-semibold text-center self-center'
          onClick={handleCreate}
          disabled={isFetching}
        >
          Create
        </button>
      </form>
    </div>
  );
};
export default NewList;
