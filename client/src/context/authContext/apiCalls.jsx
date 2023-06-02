import { loginFailure, loginStart, loginSuccess } from './AuthActions';
import customFetch from '../../utils/axios';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await customFetch.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
