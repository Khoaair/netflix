import axios from 'axios';
const customFetch = axios.create({
  baseURL: 'https://mern-netflix-clone-2023.vercel.app/',
});

export default customFetch;
