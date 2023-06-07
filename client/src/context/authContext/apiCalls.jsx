import { loginFailure, loginStart, loginSuccess, logout } from './AuthActions';
import customFetch from '../../utils/axios';
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage';
import { toast } from 'react-toastify';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await customFetch.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
    addUserToLocalStorage(res.data);
  } catch (error) {
    dispatch(loginFailure());
    toast.error(error.response.data);
  }
};

export const logoutUser = dispatch => {
  removeUserFromLocalStorage();
  dispatch(logout());
  toast.success('Logout Success');
};
