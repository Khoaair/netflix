import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { getAccessToken } from '../../utils/getAccessToken';
import {
  getMoviesStart,
  getMoviesFailure,
  getMoviesSuccess,
  deleteMovieStart,
  deleteMovieFailure,
  deleteMovieSuccess,
  createMovieStart,
  createMovieSuccess,
  createMovieFailure,
  updateMovieStart,
  updateMovieFailure,
  updateMovieSuccess,
} from './MovieActions';

// GET
export const getMovies = async dispatch => {
  dispatch(getMoviesStart());
  try {
    const res = await customFetch.get('/movies', {
      headers: {
        token: getAccessToken(),
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
    toast.error(error.response.data);
  }
};

// UPDATE
export const updateMovie = async (id, movie, dispatch) => {
  dispatch(updateMovieStart());
  try {
    const res = await customFetch.put(`movies/${id}`, movie, {
      headers: {
        token: getAccessToken(),
      },
    });
    dispatch(updateMovieSuccess(res.data));
    toast.success('Update Movie Success');
  } catch (error) {
    dispatch(updateMovieFailure());
    toast.error(error.response.data);
  }
};

// CREATE
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await customFetch.post('/movies', movie, {
      headers: {
        token: getAccessToken(),
      },
    });
    dispatch(createMovieSuccess(res.data));
    toast.success('Create Movie Success');
  } catch (error) {
    dispatch(createMovieFailure());
    toast.error(error.response.data);
  }
};

// DELTE
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await customFetch.delete('/movies/' + id, {
      headers: {
        token: getAccessToken(),
      },
    });
    dispatch(deleteMovieSuccess(id));
    toast.success('Delete Movie Success');
  } catch (error) {
    dispatch(deleteMovieFailure());
    toast.error(error.response.data);
  }
};
