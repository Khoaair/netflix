import customFetch from '../../utils/axios';
import {
  getMoviesStart,
  getMoviesFailure,
  getMoviesSuccess,
  deleteMovieStart,
  deleteMovieFailure,
  deleteMovieSuccess,
} from './MovieActions';

export const getMovies = async dispatch => {
  dispatch(getMoviesStart());
  try {
    const res = await customFetch.get('/movies', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await customFetch.delete('/movies/' + id, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};
