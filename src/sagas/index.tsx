import * as actions from '../actions';

import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { products } from '../api/fixtures/products';

export function* getData() {
  console.log('getData');
  try {
    const response = products;
    const data = yield response;
    yield put(actions.getSuccess(data));
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export function* getDataSaga() {
  console.log('get saga');
  yield takeEvery(actions.REQUEST, getData);
}

function* fetchNews() {
  try {
    const response = products;
    const data = yield response;

    console.log(data);

    yield put(actions.getSuccess(data));
    yield put({ type: 'NEWS_RECEIVED', payload: data });
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export function* actionWatcher() {
  console.log('action watcher');
  yield takeLatest('GET_NEWS', fetchNews);
}
