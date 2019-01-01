import actionTypes from '../actionTypes/auth';
import { UserState } from '../components/SignUp/index';

export const register = (user: UserState) => ({
  type: actionTypes.REQ_USER_REGISTER,
  user,
});

export const login = (user: UserState) => ({
  type: actionTypes.REQ_USER_LOGIN,
  user,
});

export const logout = () => ({
  type: actionTypes.REQ_LOGOUT,
});
