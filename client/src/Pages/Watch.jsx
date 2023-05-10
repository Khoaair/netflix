/* eslint-disable no-unused-vars */
import { ArrowBackOutlined } from '@mui/icons-material';
import React from 'react';
import video from '../assets/videos/videos.mp4';

const Watch = () => {
  return (
    <div className='watch '>
      <div className='back'>
        <ArrowBackOutlined /> <span>Home</span>
      </div>
      <video className='video' src={video} autoPlay controls muted />
    </div>
  );
};

export default Watch;
