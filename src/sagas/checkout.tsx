import { takeLatest, put, select } from 'redux-saga/effects';
import actionTypes from '../actionTypes/checkout';
import { getFailure } from '../actions/index';
import { createApiOrder } from '../helpers/request';
import { message } from 'antd';
import { push } from 'connected-react-router';

function* placeOrder(order: any) {
  try {
    yield createApiOrder();
    message.success('Order is placed');

    yield put({ type: actionTypes.ORDER_PLACED });
    yield put(push('/thx'));
  } catch (e) {
    yield put(getFailure(e));
  }
}

export function* watchCheckout() {
  yield takeLatest(actionTypes.PLACE_ORDER, placeOrder);
}
