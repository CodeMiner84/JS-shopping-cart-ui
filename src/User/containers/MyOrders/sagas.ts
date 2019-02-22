import { takeLatest, put } from 'redux-saga/effects';
import { REQ_ORDERS } from './actionTypes';
import { getFailure, loading, loaded } from 'src/Common/actions';
import { recvOrders } from './actions';
import { getRequest } from '../../../Common/api';
import routes from '../../../Common/routes';

function* getOrders() {
  try {
    yield put(loading());
    const response = yield getRequest(routes.ordersList);

    yield put(recvOrders(response.data));
    yield put(loaded());
  } catch (e) {
    yield put(loaded());
    yield put(getFailure(e));
  }
}

export function* watchOrders() {
  yield takeLatest(REQ_ORDERS, getOrders);
}
