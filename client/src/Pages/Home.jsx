/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import List from '../components/List';

const Home = ({ type }) => {
  return (
    <div className='bg-main overflow-hidden'>
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
