import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBjkGK2RZqiO74R8agm9H--xNUYPHAgqUM',
  authDomain: 'netflix-fce7c.firebaseapp.com',
  projectId: 'netflix-fce7c',
  storageBucket: 'netflix-fce7c.appspot.com',
  messagingSenderId: '871591341665',
  appId: '1:871591341665:web:e97e38901e8813e7184420',
  measurementId: 'G-LNMWHPGZ2P',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
