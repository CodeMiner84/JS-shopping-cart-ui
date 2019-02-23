import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { RegisterUserProps } from '../../dto/RegisterUserProps';
import { postRequest } from '../../../Common/api';
import routes from '../../../Common/routes';
import { userRegister } from '../../../User/actions';
import { saveToken } from '../../selectors';
import { syncCartItems } from '../../../Cart/sagas';
import { getFailure } from '../../../Common/actions';
import { REQ_USER_REGISTER } from '../../actionTypes';

function* registerUser(action: RegisterUserProps) {
  try {
    const response = yield call(() => postRequest(routes.signup, action.payload));
    if (response.status === 201) {
      yield put(userRegister(response.data));
      message.success('You have succesfully register');
      saveToken(response.data.token);

      yield syncCartItems();
    }
  } catch (e) {
    if (e.response.status === 409) {
      message.error('User already exist');
    }
    yield put(getFailure(e));
  }
}

export function* watchSignUp() {
  yield takeLatest(REQ_USER_REGISTER, registerUser);
}
