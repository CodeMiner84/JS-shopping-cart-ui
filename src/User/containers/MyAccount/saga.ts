import { put, takeLatest, call } from 'redux-saga/effects';
import { UPDATE_PERSONAL_DATA, CHANGE_PASSWORD } from './actionTypes';
import { message } from 'antd';
import { getFailure } from '../../../Common/actions';
import * as HttpStatus from 'http-status-codes';
import { personalDataUpdated } from './actions';
import { PersonalDataInputModel } from './dtos/PersonalDataInputModel';
import { ChangePasswordInputModel } from './dtos/ChangePasswordInputModel';
import { patchRequest } from '../../../Common/api';
import routes from '../../../Common/routes';

type ActionUpdateProps = {
  type: string;
  payload: PersonalDataInputModel;
};

type ActionChangePasswordProps = {
  type: string;
  payload: ChangePasswordInputModel;
};

function* updatePersonalData(action: ActionUpdateProps) {
  try {
    const response = yield call(() => patchRequest(routes.personalData, action.payload));

    if (response && response.status === HttpStatus.OK) {
      yield put(personalDataUpdated(action.payload));
      message.success('Personal data updated succesfully');
    }
  } catch (error) {
    message.error('User already exist');
    yield put(getFailure(error));
  }
}

function* changePassword(action: ActionChangePasswordProps) {
  try {
    const response = yield call(() =>
      patchRequest(routes.changePassword, action.payload),
    );

    if (response && response.status === HttpStatus.OK) {
      message.success('Password updated');
    }
  } catch (error) {
    message.error('Password mismatch!');
    yield put(getFailure(error));
  }
}

export function* watchUpdateUser() {
  yield takeLatest(UPDATE_PERSONAL_DATA, updatePersonalData);
}

export function* watchChangePassword() {
  yield takeLatest(CHANGE_PASSWORD, changePassword);
}
