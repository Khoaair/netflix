/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import customFetch from '../utils/axios';
import { getAccessToken } from '../utils/accessToken';

const ListItems = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await customFetch.get('/movies/find/' + item, {
          headers: {
            token: getAccessToken(),
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  console.log(movie);

  return (
    <Link to='/watch' state={{ movie: movie }}>
      <div
        className='listItems'
        style={{ left: isHovered && index * 288 - 67.5 + index * 2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.imgSm} alt='' />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className='itemsInfo'>
              <div className='icons'>
                <PlayArrow className='icon' />
                <Add className='icon' />
                <ThumbUpOutlined className='icon' />
                <ThumbDownOutlined className='icon' />
              </div>
              <div className='itemInfoTop'>
                <span>{movie.duration}</span>
                <span className='limit'>{movie.limit}+</span>
                <span>{movie.year}</span>
              </div>
              <div className='desc'>{movie.desc}</div>
              <div className='genre'>{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItems;
