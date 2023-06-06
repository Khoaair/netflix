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
  } catch (error) {
    dispatch(updateMovieFailure());
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
  } catch (error) {
    dispatch(createMovieFailure());
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
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};
