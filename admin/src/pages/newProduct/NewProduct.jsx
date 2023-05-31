import React, { useContext, useState } from 'react';
import './newProduct.css';
import storage from '../../utils/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { createMovie } from '../../context/movieContext/apiCalls';
import { MoviesContext } from '../../context/movieContext/MoviesContext';

export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [imageSm, setImgageSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MoviesContext);

  const handleOption = e => {
    let value = JSON.parse(e.target.value);
    setMovie({ ...movie, [e.target.name]: value });
  };

  const handleChange = e => {
    let value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = items => {
    items.forEach(item => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        err => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(url => {
            setMovie(prev => {
              return { ...prev, [item.label]: url };
            });
            setUploaded(prev => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = e => {
    e.preventDefault();
    upload([
      { file: image, label: 'image' },
      { file: imageTitle, label: 'imageTitle' },
      { file: imageSm, label: 'imageSm' },
      { file: trailer, label: 'trailer' },
      { file: video, label: 'video' },
    ]);
  };

  const handleCreate = e => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };

  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>New Movie</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label>Image</label>
          <input
            type='file'
            id='image'
            name='image'
            onChange={e => setImage(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Image Title</label>
          <input
            type='file'
            id='imageTitle'
            name='imageTitle'
            onChange={e => setImageTitle(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Image Thumbnail</label>
          <input
            type='file'
            id='imageSm'
            name='imageSm'
            onChange={e => setImgageSm(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Title</label>
          <input
            type='text'
            placeholder='John Wick'
            name='title'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Description</label>
          <input
            type='text'
            placeholder='Description'
            name='desc'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Year</label>
          <input
            type='text'
            placeholder='Year'
            name='year'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Gerne</label>
          <input
            type='text'
            placeholder='Gerne'
            name='gerne'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Limit</label>
          <input
            type='text'
            placeholder='Limit'
            name='gerne'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Duration</label>
          <input
            type='text'
            placeholder='Duration'
            name='duration'
            onChange={handleChange}
          />
        </div>

        <div className='addProductItem'>
          <label>Is Series ?</label>
          <select id='isSeries' name='isSeires' onChange={handleOption}>
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
        </div>
        <div className='addProductItem'>
          <label>Trailer</label>
          <input
            type='file'
            name='trailer'
            onChange={e => setTrailer(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Video </label>
          <input
            type='file'
            name='video'
            onChange={e => setVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 5 ? (
          <button className='addProductButton' onClick={handleCreate}>
            Create
          </button>
        ) : (
          <button className='addProductButton' onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
