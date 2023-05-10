/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from '@mui/icons-material';
import React, { useState } from 'react';

const ListItems = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';
  return (
    <div
      className='listItems'
      style={{ left: isHovered && index * 288 - 67.5 + index * 2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src='https://i-giaitri.vnecdn.net/2014/11/06/interstellarposter0110434-1415248471.jpg'
        alt=''
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className='itemsInfo'>
            <div className='icons'>
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpOutlined className='icon' />
              <ThumbDownOutlined className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>1 hour 14 mins</span>
              <span className='limit'>16+</span>
              <span>2014</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              unde temporibus voluptate
            </div>
            <div className='gerne'>Advanture</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItems;
