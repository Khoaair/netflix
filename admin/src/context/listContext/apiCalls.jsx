import customFetch from '../../utils/axios';
import {
  getListsStart,
  getListsFailure,
  getListsSuccess,
  deleteListStart,
  deleteListFailure,
  deleteListSuccess,
  // createMovieStart,
  // createMovieSuccess,
  // createMovieFailure,
  // updateMovieStart,
  // updateMovieFailure,
  // updateMovieSuccess,
} from './ListActions';

const accessToken = `Bearer ${
  JSON.parse(localStorage.getItem('user')).accessToken
}`;

// GET
export const getLists = async dispatch => {
  dispatch(getListsStart());
  try {
    const res = await customFetch.get('/lists', {
      headers: {
        token: accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};

// UPDATE
// export const updateMovie = async (id, movie, dispatch) => {
//   dispatch(updateMovieStart());
//   try {
//     const res = await customFetch.put(`movies/${id}`, movie, {
//       headers: {
//         token: accessToken,
//       },
//     });
//     dispatch(updateMovieSuccess(res.data));
//   } catch (error) {
//     dispatch(updateMovieFailure());
//   }
// };

// // CREATE
// export const createMovie = async (movie, dispatch) => {
//   dispatch(createMovieStart());
//   try {
//     const res = await customFetch.post('/movies', movie, {
//       headers: {
//         token: accessToken,
//       },
//     });
//     dispatch(createMovieSuccess(res.data));
//   } catch (error) {
//     dispatch(createMovieFailure());
//   }
// };

// DELTE
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await customFetch.delete('/lists/' + id, {
      headers: {
        token: accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (error) {
    dispatch(deleteListFailure());
  }
};
