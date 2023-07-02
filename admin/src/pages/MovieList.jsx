import { useContext, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../context/movieContext/apiCalls';

const MovieList = () => {
  const { movies, dispatch } = useContext(MoviesContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = id => {
    deleteMovie(id, dispatch);
  };

  console.log(movies);

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200,
      renderCell: params => {
        return (
          <div className='flex items-center gap-2'>
            <img
              className='w-8 h-8 rounded-full object-cover'
              src={params.row.img}
              alt=''
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'year', headerName: 'Year', width: 120 },
    { field: 'limit', headerName: 'Limit', width: 120 },
    { field: 'isSeries', headerName: 'IsSeries', width: 120 },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link to={`/movie/${params.row._id}`} state={{ movie: params.row }}>
              <button className='rounded-[10px] py-1 px-2 bg-[#3bb077] text-white mr-5 text-sm'>
                Edit
              </button>
            </Link>
            <DeleteOutline
              className='cursor-pointer'
              sx={{ color: 'red' }}
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='flex-[4]'>
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8, 16, 24]}
        checkboxSelection
        getRowId={r => r._id}
      />
    </div>
  );
};
export default MovieList;
