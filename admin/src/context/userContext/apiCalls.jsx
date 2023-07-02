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
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
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

// UPDATE
export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await customFetch.put(`/users/${id}`, user, {
      headers: {
        token: getAccessToken(),
      },
    });
    updateUserSuccess(res.data);
    toast.success('Update user success');
  } catch (error) {
    updateUserFailure();
    toast.error('You can not update user');
  }
};
