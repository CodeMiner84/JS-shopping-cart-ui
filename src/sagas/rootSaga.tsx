import { getDataSaga, actionWatcher } from './index';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([getDataSaga(), actionWatcher()]);
}
