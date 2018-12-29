import * as actions from '../actions';
import actionTypes from '../actionTypes/auth';
import cartTypes from '../actionTypes/cart';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { UserProps } from '../components/SignUp/index';
import {
  callRegisterUser,
  callLoginUser,
  me,
  recalculateCartItem,
  addProductToCart,
} from '../helpers/request';
import { push } from 'react-router-redux';
import { saveToken, getToken, logout } from '../helpers/auth';
import { message } from 'antd';
import { getCartFromState, getCustomerId } from './cart';

interface RegisterUserProps {
  type: string;
  user: UserProps;
}

function* registerUser(action: RegisterUserProps) {
  try {
    const response = yield call(() => callRegisterUser(action.user));
    if (response.status === 200) {
      yield put({ type: actionTypes.RECV_USER_REGISTRATION, payload: response.data });
      message.success('You have succesfully register');
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
      yield put({ type: actionTypes.RECV_USER_LOGIN, payload: response.data });
      saveToken(response.data.token);
      message.success('You are logged in');

      const cartItems = yield select(getCartFromState);
      const customerId = yield select(getCustomerId);
      cartItems.map((item: any) => {
        addProductToCart(getToken(), customerId, item);
      });
      yield put(push('/'));
    } else if (response.status === 500) {
      message.error('Wrong email or password');
      yield put({ type: actionTypes.RECV_ERROR });
    }
  } catch (e) {
    message.error('Wrong email or password');
    yield put({ type: actionTypes.RECV_ERROR });
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
    logout();
    yield put({ type: cartTypes.CLEAR_CART });
    message.success('You are logged off');
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
