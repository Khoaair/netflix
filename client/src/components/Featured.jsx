/* eslint-disable no-unused-vars */
import { InfoOutlined, PlayArrow, VolumeUp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { filmOptions } from '../utils/options';
import axios from 'axios';
import { dataUrl } from '../utils/constant';

// eslint-disable-next-line react/prop-types
const Featured = ({ type }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const res = await axios.get(
          `${dataUrl}movies/random?type=${type ? type : 'movies'}`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWY0ZTAzY2E0NGIwZTI4MDEwYjRiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDMxMDM4NSwiZXhwIjoxNjg0NzQyMzg1fQ.qpVNJEs4DCBzfWoRvEDAWa6viL4PR-v-nJksbxQ-zBs',
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
  console.log(content);
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select name='genre' id='genre'>
            <option>Genres</option>
            {filmOptions.map(item => {
              const { id, value, option } = item;
              return (
                <option key={id} value={value}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <img src={content.img} alt='featured image' />
      <div className='info'>
        <img
          src='http://occ-0-58-300.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABS6y6LFtVFyveiCaehIQtC-eX0iRwVlUlWYXEIjPqv1TTG2v7ExkGoH05aVVvDGBQilebZsnTbx891IwIzIoDv65AQQMsevtaphs-cTWC4CbUyCM6--YK06ndiJiaUGZ10AY5GpIvjApRN3wYLZF3sl7pmYpZKsB_4m8b53BI2VujEYXwSYD1Q.png?r=cce'
          alt=''
        />
        <span className='desc'>{content.desc}</span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow sx={{ fontSize: '2.125rem' }} />
            <span>Play</span>
          </button>
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
