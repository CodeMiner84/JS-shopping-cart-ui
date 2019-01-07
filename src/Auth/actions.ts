import { createActions } from 'redux-actions';
import {
  REQ_LOGOUT,
  REQ_USER_LOGIN,
  REQ_USER_REGISTER,
  USER_REGISTER,
  USER_LOGIN,
  USER_AUTH,
} from './actionTypes';

export const {
  reqLogout: logout,
  reqUserLogin: login,
  reqUserRegister: register,
  userRegister,
  userLogin,
  userAuth,
} = createActions(
  {},
  REQ_USER_REGISTER,
  REQ_USER_LOGIN,
  REQ_LOGOUT,
  USER_REGISTER,
  USER_LOGIN,
  USER_AUTH,
);
