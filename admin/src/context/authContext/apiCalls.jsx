import { loginFailure, loginStart, loginSuccess, logout } from './AuthActions';
import customFetch from '../../utils/axios';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await customFetch.post('/auth/login', user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logoutUser = dispatch => {
  localStorage.removeItem('user');
  dispatch(logout());
};
