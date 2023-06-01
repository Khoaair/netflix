import customFetch from '../../utils/axios';
import {
  getListsStart,
  getListsFailure,
  getListsSuccess,
  deleteListStart,
  deleteListFailure,
  deleteListSuccess,
  createListStart,
  createListSuccess,
  createListFailure,
  updateListStart,
  updateListFailure,
  updateListSuccess,
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
export const updateList = async (id, list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await customFetch.put(`lists/${id}`, list, {
      headers: {
        token: accessToken,
      },
    });
    dispatch(updateListSuccess(res.data));
  } catch (error) {
    dispatch(updateListFailure());
  }
};

// // CREATE
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await customFetch.post('/lists', list, {
      headers: {
        token: accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (error) {
    dispatch(createListFailure());
  }
};

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
