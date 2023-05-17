/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import List from '../components/List';
import { listsURL } from '../utils/constant';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [gerne, setGerne] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `${listsURL}lists${type ? '?type=' + type : ''}${
            gerne ? '&gerne=' + gerne : ''
          }`,{
            
            headers : {
              token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWY0ZTAzY2E0NGIwZTI4MDEwYjRiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDMxMDM4NSwiZXhwIjoxNjg0NzQyMzg1fQ.qpVNJEs4DCBzfWoRvEDAWa6viL4PR-v-nJksbxQ-zBs"
            }
          }
        );
        setLists(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, gerne]);
  return (
    <div className='bg-main overflow-hidden'>
      <Navbar />
      <Featured type={type} />
      {lists.map((list,index) => {
        return <List key={index} list = {list}/>
      })}
    </div>
  );
};

export default Home;
