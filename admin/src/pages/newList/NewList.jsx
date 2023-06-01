import React, { useContext, useEffect, useState } from 'react';
import './newList.css';
import { ListsContext } from '../../context/listContext/ListsContext';
import { MoviesContext } from '../../context/movieContext/MoviesContext';
import { getMovies } from '../../context/movieContext/apiCalls';
import { createList } from '../../context/listContext/apiCalls';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function NewList() {
  const [list, setList] = useState(null);

  const { dispatch, isFetching } = useContext(ListsContext);
  const { dispatch: dispatchMovie, movies } = useContext(MoviesContext);
  const history = useHistory();

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
    history.push('/lists');
  };

  const handleSelect = e => {
    let value = Array.from(e.target.selectedOptions, option => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>New List</h1>
      <form className='addProductForm'>
        <div className='formLeft'>
          <div className='addProductItem'>
            <label>Title</label>
            <input
              type='text'
              placeholder='Popular Movies'
              name='title'
              onChange={handleChange}
            />
          </div>
          <div className='addProductItem'>
            <label>Genre</label>
            <input
              type='text'
              placeholder='Action'
              name='genre'
              onChange={handleChange}
            />
          </div>
          <div className='addProductItem'>
            <label>Type</label>
            <select name='type' onChange={handleChange}>
              <option>Type</option>
              <option value='movie'>Movie</option>
              <option value='series'>Series</option>
            </select>
          </div>
        </div>
        <div className='formRight'>
          <div className='addProductItem'>
            <label>Content</label>
            <select
              multiple
              name='content'
              onChange={handleSelect}
              style={{ height: '280px' }}
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
          className='addProductButton'
          onClick={handleCreate}
          disabled={isFetching}
        >
          Create
        </button>
      </form>
    </div>
  );
}
