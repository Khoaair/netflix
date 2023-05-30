import React, { useState } from 'react';
import './newProduct.css';
import storage from '../../utils/firebase';

export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [imageSm, setImgageSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const handleChange = e => {
    let value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = items => {
    items.forEach(item => {
      const uploadTask = storage.ref(`/item/${item.file.name}`).put(item);
      uploadTask.on(
        'state_change',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        err => console.log(err),
        () => {
          uploadTask.snapshot.ref.getDownLoadURL().then(url => {
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
      { files: image, label: 'image' },
      { files: imageTitle, label: 'imageTitle' },
      { files: imageSm, label: 'imageSm' },
      { files: trailer, label: 'trailer' },
      { files: video, label: 'video' },
    ]);
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
            onChange={e => setImage(e.target.files)}
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
          <select id='isSeries' name='isSeires' onChange={handleChange}>
            <option value='false' defaultValue={false}>
              No
            </option>
            <option value='true'>Yes</option>
          </select>
        </div>
        <div className='addProductItem'>
          <label>Trailer</label>
          <input
            type='file'
            name='trailer'
            onChange={e => setTrailer(e.target.files)}
          />
        </div>
        <div className='addProductItem'>
          <label>Video </label>
          <input
            type='file'
            name='video'
            onChange={e => setVideo(e.target.files)}
          />
        </div>
        {uploaded === 5 ? (
          <button className='addProductButton'>Create</button>
        ) : (
          <button className='addProductButton' onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
