import * as actions from '../actions';
import actionTypes from '../actionTypes/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UserProps } from '../components/SignUp/index';
import { callRegisterUser, callLoginUser, me } from '../helpers/request';
import { push } from 'react-router-redux';
import { saveToken, getToken, logout } from '../helpers/auth';

interface RegisterUserProps {
  type: string;
  user: UserProps;
}

function* registerUser(action: RegisterUserProps) {
  try {
    const response = yield call(() => callRegisterUser(action.user));
    if (response.status === 200) {
      yield put({ type: actionTypes.RECV_USER_REGISTRATION, payload: response._id });
      yield put(push('/'));
    }
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

function* loginUser(action: RegisterUserProps) {
  try {
    const response = yield call(() => callLoginUser('/login', action.user));
    if (response.status === 200) {
      yield put({ type: actionTypes.RECV_USER_LOGIN, payload: response.data.token });
      saveToken(response.data.token);
      yield put(push('/'));
    }
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

function* isUserLogged() {
  try {
    const token = getToken();
    const response = yield call(() => me(token));

    if (response !== undefined && response.code === 500) {
      yield put(push('/'));
    }

    yield put({ type: actionTypes.USER_AUTH, payload: response.data });
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

function* logoutUser() {
  try {
    yield put({ type: actionTypes.REQ_LOGOUT });
    logout();

    yield put(push('/'));
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export function* watchSignUp() {
  yield takeLatest(actionTypes.REQ_USER_REGISTER, registerUser);
}

export function* watchSignIn() {
  yield takeLatest(actionTypes.REQ_USER_LOGIN, loginUser);
}

export function* watchMe() {
  yield takeLatest(actionTypes.TOKEN_REQUEST, isUserLogged);
}

export function* watchLogout() {
  yield takeLatest(actionTypes.REQ_LOGOUT, logoutUser);
}
