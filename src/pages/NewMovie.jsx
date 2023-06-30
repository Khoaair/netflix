import { useContext, useState } from 'react';
import storage from '../utils/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { createMovie } from '../context/movieContext/apiCalls';
import { MoviesContext } from '../context/movieContext/MovieContext';

export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [imageSm, setImgageSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch, isFetching } = useContext(MoviesContext);

  const handleOption = e => {
    const value = JSON.parse(e.target.value);
    setMovie({ ...movie, [e.target.name]: value });
  };

  const handleChange = e => {
    const value = e.target.value;
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
      { file: image, label: 'img' },
      { file: imageTitle, label: 'imgTitle' },
      { file: imageSm, label: 'imgSm' },
      { file: trailer, label: 'trailer' },
      { file: video, label: 'video' },
    ]);
  };

  const handleCreate = e => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };

  return (
    <div className='flex-[4]'>
      <h1 className='font-semibol text-3xl'>New Movie</h1>
      <form className='mt-[10px] flex flex-wrap'>
        <div className='w-[400px] flex flex-col mb-[10px] p-5'>
          <label className='text-gray-500 font-semibold mb-[10px] text-sm'>
            Image
          </label>
          <input
            type='file'
            id='image'
            name='img'
            onChange={e => setImage(e.target.files[0])}
            className='p-[10px] text-sm'
          />
        </div>
        <div className='w-[400px] flex flex-col mb-[10px] p-5'>
          <label className='text-gray-500 font-semibold mb-[10px] text-sm'>
            Image Title
          </label>
          <input
            type='file'
            id='imageTitle'
            name='imgTitle'
            onChange={e => setImageTitle(e.target.files[0])}
            className='p-[10px] text-sm'
          />
        </div>
        <div className='w-[400px] flex flex-col mb-[10px] p-5'>
          <label className='text-gray-500 font-semibold mb-[10px] text-sm'>
            Image Thumbnail
          </label>
          <input
            type='file'
            id='imageSm'
            name='imgSm'
            onChange={e => setImgageSm(e.target.files[0])}
            className='p-[10px] text-sm'
          />
        </div>
        <div className='w-[400px] flex flex-col mb-[10px] p-5'>
          <label className='text-gray-500 font-semibold mb-[10px] text-sm'>
            Title
          </label>
          <input
            type='text'
            placeholder='John Wick'
            name='title'
            onChange={handleChange}
            className='p-[10px] text-sm border border-gray-500'
          />
        </div>
        <div className='w-[400px] flex flex-col mb-[10px] p-5'>
          <label className='text-gray-500 font-semibold mb-[10px] text-sm'>
            Description
          </label>
          <input
            type='text'
            placeholder='Description'
            name='desc'
            onChange={handleChange}
            className='p-[10px] text-sm border border-gray-500'
          />
        </div>
        <div className='w-[400px] flex flex-col mb-[10px] p-5'>
          <label className='text-gray-500 font-semibold mb-[10px] text-sm'>
            Year
          </label>
          <input
            type='text'
            placeholder='Year'
            name='year'
            onChange={handleChange}
            className='p-[10px] text-sm border border-gray-500'
          />
        </div>
        <div className='w-[400px] flex flex-col mb-[10px] p-5'>
          <label className='text-gray-500 font-semibold mb-[10px] text-sm'>
            Genre
          </label>
          <input
            type='text'
            placeholder='Genre'
            name='genre'
            onChange={handleChange}
            className='p-[10px] text-sm border border-gray-500'
          />
        </div>
        <div className='w-[400px] flex flex-col mb-[10px] p-5'>
          <label className='text-gray-500 font-semibold mb-[10px] text-sm'>
            Limit
          </label>
          <input
            type='text'
            placeholder='Limit'
            name='limit'
            onChange={handleChange}
            className='p-[10px] text-sm border border-gray-500'
          />
        </div>
        <div className='w-[400px] flex flex-col mb-[10px] p-5'>
          <label className='text-gray-500 font-semibold mb-[10px] text-sm'>
            Duration
          </label>
          <input
            type='text'
            placeholder='Duration'
            name='duration'
            onChange={handleChange}
            className='p-[10px] text-sm border border-gray-500'
          />
        </div>

        <div className='w-[400px] flex flex-col mb-[10px] p-5'>
          <label className='text-gray-500 font-semibold mb-[10px] text-sm'>
            Is Series ?
          </label>
          <select
            id='isSeries'
            name='isSeries'
            className='p-[10px] text-sm border border-gray-500'
            onChange={handleOption}
          >
            <option>IsSeries</option>
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
        </div>
        <div className='w-[400px] flex flex-col mb-[10px] p-5'>
          <label className='text-gray-500 font-semibold mb-[10px] text-sm'>
            Trailer
          </label>
          <input
            type='file'
            name='trailer'
            onChange={e => setTrailer(e.target.files[0])}
            className='p-[10px] text-sm'
          />
        </div>
        <div className='w-[400px] flex flex-col mb-[10px] p-5'>
          <label className='text-gray-500 font-semibold mb-[10px] text-sm'>
            Video{' '}
          </label>
          <input
            type='file'
            name='video'
            onChange={e => setVideo(e.target.files[0])}
            className='p-[10px] text-sm'
          />
        </div>
        {uploaded === 5 ? (
          <button
            className='mt-[10px] px-3 py-1 h-8 self-center rounded-[10px] bg-blue-900 text-white text-center text-sm'
            onClick={handleCreate}
            disabled={isFetching}
          >
            Create
          </button>
        ) : (
          <button
            className='mt-[10px] px-3 py-1 h-8 self-center rounded-[10px] bg-blue-900 text-white text-center text-sm'
            onClick={handleUpload}
            disabled={isFetching}
          >
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
