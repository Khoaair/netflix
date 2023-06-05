import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './list.css';

export default function List() {
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
              <span className='productInfoKey'>genre:</span>
              <span className='productInfoValue'>{list.genre}</span>
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
            <label>Genre</label>
            <input
              type='text'
              placeholder={list.genre}
              name='genre'
              onChange={handleChange}
            />
            <label>Type</label>
            <input
              type='text'
              placeholder={list.type}
              name='type'
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
