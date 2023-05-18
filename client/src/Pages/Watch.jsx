/* eslint-disable no-unused-vars */
import { ArrowBackOutlined } from '@mui/icons-material';
import React from 'react';
import video from '../assets/videos/videos.mp4';
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {
  const location = useLocation();
  const movie = location.state.movie.trailer;
  return (
    <div className='watch '>
      <Link to='/' className='back'>
        <ArrowBackOutlined /> <span>Home</span>
      </Link>
      <video className='video' src={movie} autoPlay controls muted />
    </div>
  );
};

export default Watch;
