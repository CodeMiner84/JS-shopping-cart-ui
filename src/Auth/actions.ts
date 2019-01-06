import actionTypes from './actionTypes';
import { UserState } from 'src/Auth/Signup';

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
