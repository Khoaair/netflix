/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import List from '../components/List';
import customFetch from '../utils/axios';
import { getAccessToken } from '../utils/accessToken';
import { TypeGenreContext } from '../context/typeGenreContext/typeGenreContext';
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  // const [genre, setGenre] = useState(null);

  const { genre, setGenre } = useContext(TypeGenreContext);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await customFetch.get(
          `lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token: getAccessToken(),
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
      <div className='mt-28 sm:max-lg:mt-28 lg:mt-0'>
        {lists.map((list, index) => {
          return <List key={index} list={list} />;
        })}
      </div>
    </div>
  );
};

export default Home;
