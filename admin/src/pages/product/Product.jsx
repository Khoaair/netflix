import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './product.css';
import { Publish } from '@material-ui/icons';
import { updateMovie } from '../../context/movieContext/apiCalls';
import { MoviesContext } from '../../context/movieContext/MoviesContext';

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
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Movie</h1>
        <Link to='/newproduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img src={movie.img} alt='' className='productInfoImg' />
            <span className='productName'>{movie.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>{movie._id}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>genre:</span>
              <span className='productInfoValue'>{movie.genre}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>year:</span>
              <span className='productInfoValue'>{movie.year}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>limit:</span>
              <span className='productInfoValue'>{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Movie Title</label>
            <input
              type='text'
              placeholder={movie.title}
              name='title'
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type='text'
              placeholder={movie.year}
              name='year'
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type='text'
              placeholder={movie.genre}
              name='genre'
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type='text'
              placeholder={movie.limit}
              name='limit'
              onChange={handleChange}
            />
            <label>Trailer</label>
            <input type='file' placeholder={movie.trailer} name='trailer' />
            <label>Video</label>
            <input type='file' placeholder={movie.video} name='video' />
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img src={movie.img} alt='' className='productUploadImg' />
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='productButton' onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
