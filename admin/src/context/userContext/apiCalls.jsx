import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { getAccessToken } from '../../utils/getAccessToken';
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
} from './UserActions';

// GET
export const getUsers = async dispatch => {
  dispatch(getUsersStart());
  try {
    const res = await customFetch.get('/users', {
      headers: {
        token: getAccessToken(),
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (error) {
    dispatch(getUsersFailure());
    toast.error(error.response.data);
  }
};

// DELETE
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await customFetch.delete('/users/' + id, {
      headers: {
        token: getAccessToken(),
      },
    });
    dispatch(deleteUserSuccess(id));
    toast.success('Delete User Success');
  } catch (error) {
    dispatch(deleteUserFailure());
    toast.error(error.response.data);
  }
};
