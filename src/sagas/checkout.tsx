import { takeLatest, put } from 'redux-saga/effects';
import actionTypes from '../actionTypes/checkout';
import { getFailure } from '../actions/index';

function* placeOrder(order: any) {
  try {
    console.log('order', order);

    yield put({ type: actionTypes.ORDER_PLACED });
  } catch (e) {
    yield put(getFailure(e));
  }
}

export function* watchCheckout() {
  yield takeLatest(actionTypes.PLACE_ORDER, placeOrder);
}
