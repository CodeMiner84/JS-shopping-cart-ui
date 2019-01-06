import { createActions } from 'redux-actions';
import {
  REQ_LOGOUT,
  REQ_USER_LOGIN,
  REQ_USER_REGISTER,
  USER_REGISTER,
  USER_LOGIN,
  USER_AUTH,
} from './actionTypes';

const actions = createActions(
  {},
  REQ_USER_REGISTER,
  REQ_USER_LOGIN,
  REQ_LOGOUT,
  USER_REGISTER,
  USER_LOGIN,
  USER_AUTH,
);

export const logout = actions.reqLogout;
export const login = actions.reqUserLogin;
export const register = actions.reqUserRegister;
export const userRegister = actions.userRegister;
export const userLogin = actions.userLogin;
export const userAuth = actions.userAuth;
