import { loginFailure, loginStart, loginSuccess, logout } from './AuthActions';
import customFetch from '../../utils/axios';
import { toast } from 'react-toastify';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await customFetch.post('/auth/login', user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
    toast.error(error.response.data);
  }
};

export const logoutUser = dispatch => {
  localStorage.removeItem('user');
  dispatch(logout());
  // toast.success('Logout Success');
};
