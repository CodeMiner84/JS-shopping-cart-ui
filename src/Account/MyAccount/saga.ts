import { put, takeLatest, call } from 'redux-saga/effects';
import { UPDATE_PERSONAL_DATA } from './actionTypes';
import { message } from 'antd';
import { getFailure, loading } from 'src/Common/actions';
import { patchPersonalData } from './api';
import * as HttpStatus from 'http-status-codes';
import { personalDataUpdated } from './actions';

function* updatePersonalData(action: any) {
  try {
    const response = yield call(() => patchPersonalData(action.payload));

    if (response && response.status === HttpStatus.OK) {
      yield put(personalDataUpdated(action.payload));
      message.success('Personal data updated succesfully');
    }
  } catch (e) {
    message.error(e.message);
    yield put(getFailure(e));
  }
}

export function* watchUpdateUser() {
  yield takeLatest(UPDATE_PERSONAL_DATA, updatePersonalData);
}
