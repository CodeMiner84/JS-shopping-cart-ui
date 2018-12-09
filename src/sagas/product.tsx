import * as actions from '../actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../actionTypes/product';
import { getData } from '../helpers/request';
import routes from '../helpers/routes';

function* fetchProducts() {
  try {
    const response = yield call(() => getData(routes.products));
    const data = response.data;

    yield put(actions.getSuccess(data));
    yield put({ type: 'NEWS_RECEIVED', payload: data });
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export function* productListWatcher() {
  yield takeLatest(actionTypes.GET_PRODUCTS, fetchProducts);
}
