import actionTypes from '../actionTypes/auth';
import { UserProps } from '../components/SignUp/index';

export const register = (user: UserProps) => ({
  type: actionTypes.REQ_USER_REGISTER,
  user,
});

export const login = (user: UserProps) => ({
  type: actionTypes.REQ_USER_LOGIN,
  user,
});

export const logout = () => ({
  type: actionTypes.REQ_LOGOUT,
});
