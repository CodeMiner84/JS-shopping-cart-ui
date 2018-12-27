import { takeLatest, put, select } from 'redux-saga/effects';
import actionTypes from '../actionTypes/checkout';
import { getFailure } from '../actions/index';
import { createApiOrder } from '../helpers/request';

function* placeOrder(order: any) {
  try {
    yield createApiOrder();

    yield put({ type: actionTypes.ORDER_PLACED });
  } catch (e) {
    yield put(getFailure(e));
  }
}

export function* watchCheckout() {
  yield takeLatest(actionTypes.PLACE_ORDER, placeOrder);
}
