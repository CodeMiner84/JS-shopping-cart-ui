import { productListWatcher } from './product';
import { all } from 'redux-saga/effects';
import { cartAddWatcher } from './cart';
import { watchSignUp } from './auth';

export function* rootSaga() {
  yield all([productListWatcher(), cartAddWatcher(), watchSignUp()]);
}
