import { productListWatcher } from './product';
import { all } from 'redux-saga/effects';
import {
  cartAddWatcher,
  watchCart,
  watchRemoveFromCart,
  watchRecalculate,
} from './cart';
import { watchSignUp, watchSignIn, watchMe, watchLogout } from './auth';
import { watchCheckout } from './checkout';

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
    watchRecalculate(),
    watchCheckout(),
  ]);
}
