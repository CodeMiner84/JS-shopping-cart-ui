import * as actions from '../actions';
import actionTypes from '../actionTypes/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UserProps } from '../components/SignUp/index';
import { callRegisterUser } from '../helpers/request';
import { push } from 'react-router-redux';

interface RegisterUserProps {
  type: string;
  user: UserProps;
}

function* registerUser(action: RegisterUserProps) {
  try {
    const response = yield call(() => callRegisterUser('/user', action.user));
    if (response.status === 200) {
      yield put({ type: actionTypes.RECV_USER_REGISTRATION, payload: response._id });
      yield put(push('/'));
    }
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export function* watchSignUp() {
  yield takeLatest(actionTypes.REQ_USER_REGISTER, registerUser);
}
