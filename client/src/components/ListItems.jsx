/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { dataUrl } from '../utils/constant';
import { Link } from 'react-router-dom';

const ListItems = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`${dataUrl}movies/` + item, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWY0ZTAzY2E0NGIwZTI4MDEwYjRiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDMxMDM4NSwiZXhwIjoxNjg0NzQyMzg1fQ.qpVNJEs4DCBzfWoRvEDAWa6viL4PR-v-nJksbxQ-zBs',
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

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
              <div className='gerne'>{movie.gerne}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItems;
