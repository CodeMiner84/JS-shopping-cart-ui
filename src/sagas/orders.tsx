import { takeLatest, put, select } from 'redux-saga/effects';
import actionTypes from '../actionTypes/orders';
import { getFailure } from '../actions/index';
import { getApiOrders } from '../helpers/request';

function* getOrders() {
  try {
    const response = yield getApiOrders();

    yield put({ type: actionTypes.RECV_ORDERS, orders: response.data });
  } catch (e) {
    yield put(getFailure(e));
  }
}

export function* watchOrders() {
  yield takeLatest(actionTypes.REQ_ORDERS, getOrders);
}
