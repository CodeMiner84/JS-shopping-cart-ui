import { productListWatcher } from './product';
import { all } from 'redux-saga/effects';
import { cartAddWatcher } from './cart';
import { watchSignUp, watchSignIn, watchMe } from './auth';

export function* rootSaga() {
  yield all([
    productListWatcher(),
    cartAddWatcher(),
    watchSignUp(),
    watchSignIn(),
    watchMe(),
  ]);
}
