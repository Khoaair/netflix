import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './list.css';
import { updateMovie } from '../../context/movieContext/apiCalls';
import { MoviesContext } from '../../context/movieContext/MoviesContext';

export default function List() {
  const location = useLocation();
  const { list } = location.state;

  const { dispatch } = useContext(MoviesContext);

  const [movieUpdate, setMovieUpdate] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  const handleChange = e => {
    let value = e.target.value;
    setMovieUpdate({ ...movieUpdate, [e.target.name]: value });
  };

  const handleUpdate = e => {
    e.preventDefault();
    // updateMovie(movie._id, movieUpdate, dispatch);
  };

  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>List</h1>
        <Link to='/newList'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <span className='productName'>{list.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>{list._id}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>gerne:</span>
              <span className='productInfoValue'>{list.gerne}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>type:</span>
              <span className='productInfoValue'>{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>List Title</label>
            <input
              type='text'
              placeholder={list.title}
              name='title'
              onChange={handleChange}
            />
            <label>Gerne</label>
            <input
              type='text'
              placeholder={list.gerne}
              name='year'
              onChange={handleChange}
            />
            <label>Type</label>
            <input
              type='text'
              placeholder={list.type}
              name='gerne'
              onChange={handleChange}
            />
          </div>
          <div className='productFormRight'>
            <button className='productButton' onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
