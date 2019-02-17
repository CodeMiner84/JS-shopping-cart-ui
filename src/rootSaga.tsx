import { productListWatcher } from './Dashboard/sagas';
import { all } from 'redux-saga/effects';
import {
  cartAddWatcher,
  watchCart,
  watchRemoveFromCart,
  watchRecalculate,
} from './Cart/sagas';
import { watchSignUp, watchSignIn, watchMe, watchLogout } from './User/sagas';
import { watchCheckout } from './Checkout/sagas';
import { watchOrders } from './User/containers/MyOrders/sagas';
import { watchUpdateUser, watchChangePassword } from './User/containers/MyAccount/saga';

export function* rootSaga() {
  yield all([
    watchMe(),
    productListWatcher(),
    cartAddWatcher(),
    watchSignUp(),
    watchSignIn(),
    watchLogout(),
    watchCart(),
    watchRemoveFromCart(),
    watchRecalculate(),
    watchCheckout(),
    watchOrders(),
    watchUpdateUser(),
    watchChangePassword(),
  ]);
}
