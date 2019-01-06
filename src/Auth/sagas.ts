import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { message } from 'antd';
import * as actions from 'src/Common/actions';
import { UserState } from 'src/Auth/Signup';
import { callRegisterUser, callLoginUser, me } from 'src/Auth/api';
import { addProductToCart } from 'src/Dashboard/api';
import { saveToken, getToken, logout } from './selectors';
import { getCartFromState, getCustomerId } from 'src/Cart/sagas';
import { CLEAR_CART } from '../Cart/actionTypes';
import {
  RECV_USER_REGISTRATION,
  RECV_USER_LOGIN,
  RECV_ERROR,
  USER_AUTH,
  REQ_USER_REGISTER,
  REQ_USER_LOGIN,
  TOKEN_REQUEST,
  REQ_LOGOUT,
} from './actionTypes';

interface RegisterUserProps {
  type: string;
  user: UserState;
}

function* registerUser(action: RegisterUserProps) {
  try {
    const response = yield call(() => callRegisterUser(action.user));
    if (response.status === 200) {
      yield put({ type: RECV_USER_REGISTRATION, payload: response.data });
      message.success('You have succesfully register');
      saveToken(response.data.token);

      yield syncCartItems();
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
      yield put({ type: RECV_USER_LOGIN, payload: response.data });
      saveToken(response.data.token);
      message.success('You are logged in');

      yield syncCartItems();
      yield put(push('/'));
    } else if (response.status === 500) {
      message.error('Wrong email or password');
      yield put({ type: RECV_ERROR });
    }
  } catch (e) {
    message.error('Wrong email or password');
    yield put({ type: RECV_ERROR });
    yield put(actions.getFailure(e));
  }
}

function* syncCartItems() {
  const cartItems = yield select(getCartFromState);
  const customerId = yield select(getCustomerId);
  cartItems.map((item: any) => {
    addProductToCart(getToken(), customerId, item);
  });
}

function* isUserLogged() {
  try {
    const token = getToken();
    const response = yield call(() => me(token));

    if (response !== undefined && response.code === 500) {
      yield put(push('/'));
    }

    yield put({ type: USER_AUTH, payload: response.data });
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

function* logoutUser() {
  try {
    logout();
    yield put({ type: CLEAR_CART });
    message.success('You are logged off');
    yield put(push('/'));
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export function* watchSignUp() {
  yield takeLatest(REQ_USER_REGISTER, registerUser);
}

export function* watchSignIn() {
  yield takeLatest(REQ_USER_LOGIN, loginUser);
}

export function* watchMe() {
  yield takeLatest(TOKEN_REQUEST, isUserLogged);
}

export function* watchLogout() {
  yield takeLatest(REQ_LOGOUT, logoutUser);
}
