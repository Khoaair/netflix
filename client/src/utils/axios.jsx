import axios from 'axios';
const customFetch = axios.create({
  // baseURL: 'https://mern-netflix-clone-2023.vercel.app/api/',
  baseURL: 'http://localhost:8800/api',
});

export default customFetch;
