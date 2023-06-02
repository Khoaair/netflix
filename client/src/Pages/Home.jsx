/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import List from '../components/List';
import customFetch from '../utils/axios';
import { accessToken } from '../utils/accessToken';
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await customFetch.get(
          `lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token: accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className='bg-main overflow-hidden'>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, index) => {
        return <List key={index} list={list} />;
      })}
    </div>
  );
};

export default Home;
