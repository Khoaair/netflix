/* eslint-disable no-unused-vars */

import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import React, { useRef, useState } from 'react';
import ListItems from '../components/ListItems';

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = direction => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 60;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${6 * 292 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 3) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${6 * -292 + distance}px)`;
    }

    console.log(distance);
  };
  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosNewOutlined
          className='sliderArrow left'
          onClick={() => handleClick('left')}
          style={{ display: !isMoved && 'none' }}
        />
        <div className='container' ref={listRef}>
          <ListItems index={0} />
          <ListItems index={1} />
          <ListItems index={2} />
          <ListItems index={3} />
          <ListItems index={4} />
          <ListItems index={5} />
          <ListItems index={6} />
          <ListItems index={7} />
          <ListItems index={8} />
          <ListItems index={9} />
          <ListItems index={10} />
          <ListItems index={11} />
          <ListItems index={12} />
          <ListItems index={13} />
          <ListItems index={14} />
          <ListItems index={15} />
          <ListItems index={16} />
          <ListItems index={17} />
          <ListItems index={18} />
          <ListItems index={19} />
          <ListItems index={20} />
          <ListItems index={21} />
          <ListItems index={22} />
          <ListItems index={23} />
        </div>
        <ArrowForwardIosOutlined
          className='sliderArrow right'
          onClick={() => {
            handleClick('right');
          }}
        />
      </div>
    </div>
  );
};

export default List;
