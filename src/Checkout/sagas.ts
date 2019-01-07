import { takeLatest, put } from 'redux-saga/effects';
import { getFailure, loading, loaded } from '../Common/actions';
import { createApiOrder } from './api';
import { message } from 'antd';
import { push } from 'connected-react-router';
import { getToken } from '../Auth/selectors';
import { PLACE_ORDER } from './actionTypes';
import { orderPlaced } from './actions';

function* placeOrder() {
  try {
    yield put(loading());
    const token = getToken();
    if (!token) {
      message.error('Only logged user can create order');
      return;
    }
    yield createApiOrder();
    message.success('Order is placed');

    yield put(orderPlaced());
    yield put(loaded());
    yield put(push('/thx'));
  } catch (e) {
    yield put(loaded());
    yield put(getFailure(e));
  }
}

export function* watchCheckout() {
  yield takeLatest(PLACE_ORDER, placeOrder);
}
