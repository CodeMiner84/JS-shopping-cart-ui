import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { message } from 'antd';
import { UserState } from 'src/Auth/Signup';
import { callRegisterUser, callLoginUser, me } from 'src/Auth/api';
import { addProductToCart } from 'src/Dashboard/api';
import { saveToken, getToken, logout } from './selectors';
import { getCartFromState, getUserId } from 'src/Cart/sagas';
import { userRegister, userLogin, userAuth } from './actions';
import { getFailure } from '../Common/actions';
import {
  REQ_USER_REGISTER,
  REQ_USER_LOGIN,
  TOKEN_REQUEST,
  REQ_LOGOUT,
} from './actionTypes';
import { clearCart } from 'src/Cart/actions';

interface RegisterUserProps {
  type: string;
  payload: UserState;
}

function* registerUser(action: RegisterUserProps) {
  try {
    const response = yield call(() => callRegisterUser(action.payload));
    if (response.status === 200) {
      yield put(userRegister(response.data));
      message.success('You have succesfully register');
      saveToken(response.data.token);

      yield syncCartItems();
      yield put(push('/'));
    }
  } catch (e) {
    yield put(getFailure(e));
  }
}

function* loginUser(action: RegisterUserProps) {
  try {
    const response = yield call(() => callLoginUser(action.payload));
    if (response.status === 200) {
      yield put(userLogin(response.data));
      saveToken(response.data.token);
      message.success('You are logged in');

      yield syncCartItems();
      yield put(push('/'));
    } else if (response.status === 500) {
      message.error('Wrong email or password');
      yield put(getFailure('Wrong email or password'));
    }
  } catch (e) {
    message.error('Wrong email or password');
    yield put(getFailure(e));
  }
}

function* syncCartItems() {
  const cartItems = yield select(getCartFromState);
  const userId = yield select(getUserId);
  cartItems.map((item: any) => {
    addProductToCart(getToken(), userId, item);
  });
}

function* isUserLogged() {
  try {
    const token = getToken();
    const response = yield call(() => me(token));
    if (response != null && response.status !== 200) {
      yield put(push('/'));
      yield put(userAuth(response.data));
    }
  } catch (e) {
    yield put(getFailure(e));
  }
}

function* logoutUser() {
  try {
    logout();
    yield put(clearCart());
    message.success('You are logged off');
    yield put(push('/'));
  } catch (e) {
    yield put(getFailure(e));
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
