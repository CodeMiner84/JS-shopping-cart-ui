import { productListWatcher } from './product';
import { all } from 'redux-saga/effects';
import { cartAddWatcher } from './cart';

export function* rootSaga() {
  yield all([productListWatcher(), cartAddWatcher()]);
}
