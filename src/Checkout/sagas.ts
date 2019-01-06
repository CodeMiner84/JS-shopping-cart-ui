import { takeLatest, put, select } from 'redux-saga/effects';
import { getFailure } from '../Common/actions';
import { createApiOrder } from './api';
import { message } from 'antd';
import { push } from 'connected-react-router';
import { getToken } from '../Auth/selectors';
import { ORDER_PLACED, PLACE_ORDER } from './actionTypes';

function* placeOrder(order: any) {
  try {
    const token = getToken();
    if (!token) {
      message.error('Only logged user can create order');
      return;
    }
    yield createApiOrder();
    message.success('Order is placed');

    yield put({ type: ORDER_PLACED });
    yield put(push('/thx'));
  } catch (e) {
    yield put(getFailure(e));
  }
}

export function* watchCheckout() {
  yield takeLatest(PLACE_ORDER, placeOrder);
}
