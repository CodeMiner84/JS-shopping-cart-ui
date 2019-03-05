import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { message } from 'antd';
import { RegisterUserProps } from '../../dto/RegisterUserProps';
import { postRequest, getRequest } from '../../../Common/api';
import routes from '../../../Common/routes';
import { userLogin, userAuth } from '../../../User/actions';
import { saveToken, getToken, logout } from '../../selectors';
import { getFailure } from '../../../Common/actions';
import { REQ_USER_LOGIN, TOKEN_REQUEST, REQ_LOGOUT } from '../../actionTypes';
import { clearCart } from '../../../Cart/actions';
import { syncCartItems } from '../../../Cart/sagas';

function* loginUser(action: RegisterUserProps) {
  try {
    const response = yield call(() => postRequest(routes.signin, action.payload));
    if (response.status === 201) {
      yield put(userLogin(response.data));
      saveToken(response.data.token);
      message.success('You are logged in');

      yield syncCartItems();
    } else if (response.status === 500) {
      message.error('Wrong email or password');
      yield put(getFailure('Wrong email or password'));
    }
  } catch (e) {
    message.error('Wrong email or password');
    yield put(getFailure(e));
  }
}

function* isUserLogged() {
  try {
    const token = getToken();
    if (token) {
      const response = yield call(() => getRequest(routes.me));

      if (response != null && response.status === 200) {
        yield put(userAuth(response.data));
      }
    }
  } catch (e) {
    yield put(push('/'));
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

export function* watchSignIn() {
  yield takeLatest(REQ_USER_LOGIN, loginUser);
}

export function* watchMe() {
  yield takeLatest(TOKEN_REQUEST, isUserLogged);
}

export function* watchLogout() {
  yield takeLatest(REQ_LOGOUT, logoutUser);
}
