import * as actions from '../actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../actionTypes/product';
import { getData } from '../helpers/request';
import routes from '../helpers/routes';

function* fetchProducts() {
  try {
    yield sleep(1);
    const response = yield call(() => getData(routes.products));
    const data = response.data;

    yield put({ type: actionTypes.RECV_PRODUCTS, payload: data });
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export function* productListWatcher() {
  yield takeLatest(actionTypes.GET_PRODUCTS, fetchProducts);
}

function* sleep(time: number) {
  yield new Promise(resolve => setTimeout(resolve, time * 1000));
}
