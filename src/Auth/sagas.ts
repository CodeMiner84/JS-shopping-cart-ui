import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { message } from 'antd';
import { UserState } from './Signup';
import { saveToken } from './selectors';
import { userLogin } from './actions';
import { getFailure } from '../Common/actions';
import { callLoginUser } from './api';
import { REQ_USER_LOGIN } from './actionTypes';

interface RegisterUserProps {
  type: string;
  payload: UserState;
}

export function* loginUser(action: RegisterUserProps) {
  try {
    const response = yield call(() => callLoginUser('/login', action.payload));
    if (response === undefined) {
      yield put(getFailure(action));
    } else if (response.status === 200) {
      yield put(userLogin(response.data));
      saveToken(response.data.token);
      message.success('You are logged in');

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

// function* registerUser(action: RegisterUserProps) {
//   try {
//     const response = yield call(() => callRegisterUser(action.payload));
//     if (response.status === 200) {
//       yield put(userRegister(response.data));
//       message.success('You have succesfully register');
//       saveToken(response.data.token);

//       yield syncCartItems();
//       yield put(push('/'));
//     }
//   } catch (e) {
//     yield put(getFailure(e));
//   }
// }

// function* syncCartItems() {
//   const cartItems = yield select(getCartFromState);
//   const customerId = yield select(getCustomerId);
//   cartItems.map((item: any) => {
//     addProductToCart(getToken(), customerId, item);
//   });
// }

// function* isUserLogged() {
//   try {
//     const token = getToken();
//     const response = yield call(() => me(token));

//     if (response != null && response.code === 500) {
//       yield put(push('/'));
//       yield put(userAuth(response.data));
//     }
//   } catch (e) {
//     yield put(getFailure(e));
//   }
// }

// function* logoutUser() {
//   try {
//     logout();
//     yield put(clearCart());
//     message.success('You are logged off');
//     yield put(push('/'));
//   } catch (e) {
//     yield put(getFailure(e));
//   }
// }
export function* watchSignIn() {
  yield takeLatest(REQ_USER_LOGIN, loginUser);
}

// export function* watchSignUp() {
//   yield takeLatest(REQ_USER_REGISTER, registerUser);
// }

// export function* watchMe() {
//   yield takeLatest(TOKEN_REQUEST, isUserLogged);
// }

// export function* watchLogout() {
//   yield takeLatest(REQ_LOGOUT, logoutUser);
// }
