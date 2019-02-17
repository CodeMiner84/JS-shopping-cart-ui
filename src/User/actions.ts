import { createActions } from 'redux-actions';
import {
  REQ_LOGOUT,
  REQ_USER_LOGIN,
  REQ_USER_REGISTER,
  USER_REGISTER,
  USER_LOGIN,
  USER_AUTH,
  TOKEN_REQUEST,
  TOGGLE_SIGNIN,
  TOGGLE_SIGNUP,
} from './actionTypes';

export const {
  reqLogout: logout,
  reqUserLogin: login,
  reqUserRegister: register,
  userRegister,
  userLogin,
  userAuth,
  tokenRequest,
  toggleSignin,
  toggleSignup,
} = createActions(
  {},
  REQ_USER_REGISTER,
  REQ_USER_LOGIN,
  REQ_LOGOUT,
  USER_REGISTER,
  USER_LOGIN,
  USER_AUTH,
  TOKEN_REQUEST,
  TOGGLE_SIGNIN,
  TOGGLE_SIGNUP,
);
