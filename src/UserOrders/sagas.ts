import { takeLatest, put, select } from 'redux-saga/effects';
import { REQ_ORDERS, RECV_ORDERS } from './actionTypes';
import { getFailure } from '../Common/actions';
import { getApiOrders } from './api';

function* getOrders() {
  try {
    const response = yield getApiOrders();

    yield put({ type: RECV_ORDERS, orders: response.data });
  } catch (e) {
    yield put(getFailure(e));
  }
}

export function* watchOrders() {
  yield takeLatest(REQ_ORDERS, getOrders);
}
