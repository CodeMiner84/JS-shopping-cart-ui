import * as actions from '../Common/actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS } from './actionTypes';
import { getData } from 'src/Common/api';
import routes from '../Common/routes';
import { loading, loaded } from '../Common/actions';
import { receiveProducts } from './actions';

function* fetchProducts() {
  try {
    yield put(loading());
    const response = yield call(() => getData(routes.products));
    yield put(receiveProducts(response.data));
    yield put(loaded());
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export function* productListWatcher() {
  yield takeLatest(GET_PRODUCTS, fetchProducts);
}
