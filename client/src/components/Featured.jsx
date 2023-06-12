/* eslint-disable no-unused-vars */
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { filmOptions } from '../utils/options';
import customFetch from '../utils/axios';
import { getAccessToken } from '../utils/accessToken';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const res = await customFetch.get(
          `movies/random?type=${type ? type : 'movies'}`,
          {
            headers: {
              token: getAccessToken(),
            },
          }
        );
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomMovie();
  }, [type]);
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select
            name='genre'
            id='genre'
            onChange={e => setGenre(e.target.value)}
          >
            <option>Genres</option>
            {filmOptions.map(item => {
              const { id, value, option } = item;
              return (
                <option key={id} value={value} onChange={e => e.target.value}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <img src={content.img} alt='featured image' />
      <div className='info'>
        <img src={content.imgTitle} alt='' />
        <span className='desc'>{content.desc}</span>
        <div className='buttons'>
          <Link to='watch' state={{ movie: content }} className='play'>
            <PlayArrow sx={{ fontSize: '2.125rem' }} />
            <span>Play</span>
          </Link>
          <button className='more'>
            <InfoOutlined sx={{ fontSize: '2.125rem' }} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
