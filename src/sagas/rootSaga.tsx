import { productListWatcher } from './product';
import { all } from 'redux-saga/effects';
import { cartAddWatcher, watchCart, watchRemoveFromCart } from './cart';
import { watchSignUp, watchSignIn, watchMe, watchLogout } from './auth';

export function* rootSaga() {
  yield all([
    productListWatcher(),
    cartAddWatcher(),
    watchSignUp(),
    watchSignIn(),
    watchMe(),
    watchLogout(),
    watchCart(),
    watchRemoveFromCart(),
  ]);
}
