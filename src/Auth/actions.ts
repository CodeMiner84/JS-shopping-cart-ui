import { UserState } from 'src/Auth/Signup';
import { createActions } from 'redux-actions';
import { REQ_LOGOUT } from './actionTypes';

const actions = createActions(
  {
    REQ_USER_REGISTER: (user: UserState) => user,
    REQ_USER_LOGIN: (user: UserState) => user,
  },
  REQ_LOGOUT,
);

export const logout = actions.reqLogout;
export const login = actions.reqUserLogin;
export const register = actions.reqUserRegister;
