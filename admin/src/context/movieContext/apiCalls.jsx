import customFetch from '../../utils/axios';
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
} from './MovieActions';

const accessToken = `Bearer ${
  JSON.parse(localStorage.getItem('user')).accessToken
}`;

// GET
export const getMovies = async dispatch => {
  dispatch(getMoviesStart());
  try {
    const res = await customFetch.get('/movies', {
      headers: {
        token: accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

// CREATE
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await customFetch.post('/movies', movie, {
      headers: {
        token: accessToken,
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
        token: accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};
