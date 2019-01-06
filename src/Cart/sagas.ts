import * as actions from '../Common/actions';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import actionTypes from '../Dashboard/actionTypes';
import { CHECKOUT_CALC } from '../Checkout/actionTypes';
import { ProductModel } from '../Dashboard';
import { getCart, removeFromCart, recalculateCartItem } from './api';
import { addProductToCart } from 'src/Dashboard/api';
import { getToken } from '../Auth/selectors';
import { message } from 'antd';
import {
  RECV_CART,
  ITEM_REMOVED,
  RECALCULATED,
  RECALCULATE_CART,
  REMOVE_FROM_CART,
  GET_CART,
  ADD_TO_CART,
} from './actionTypes';

interface AddToCart {
  type: string;
  payload: ProductModel;
}
interface RemoveFromCartProps {
  type: string;
  payload: string;
}

interface RecalculateProps {
  type: string;
  payload: {
    id: string;
    quantity: number;
  };
}

export function* loadCartItems() {
  try {
    const token = getToken();
    if (token) {
      const response = yield call(() => getCart(token));
      yield put({ type: RECV_CART, payload: response.data });
    }
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

function* getCartItems() {
  try {
    yield loadCartItems();
    yield calculateOrderPrice();
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export const getCustomerId = (state: any) => state.auth.user._id;

function* addToCart(action: AddToCart) {
  try {
    yield syncProductOnAdd(action.payload);
    yield put({ type: actionTypes.ADDED_TO_CART, payload: action.payload });
    yield calculateOrderPrice();
    message.success('Product is added to cart!');
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

function* syncProductOnAdd(action: ProductModel) {
  try {
    const token = getToken();
    if (!token) {
      return;
    }

    const customerId = yield select(getCustomerId);
    yield call(() => addProductToCart(token, customerId, action));
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

function* removeFromCartSaga(action: RemoveFromCartProps) {
  try {
    yield call(() => removeFromCart(action.payload));
    yield put({ type: ITEM_REMOVED, id: action.payload });
    message.success('Product was removed from cart!');
    yield calculateOrderPrice();
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

function* cartRecalculate(action: RecalculateProps) {
  try {
    const token = getToken();
    if (token) {
      yield call(() => recalculateCartItem(action.payload.id, action.payload.quantity));
    }
    yield put({ type: RECALCULATED, payload: action.payload });

    yield calculateOrderPrice();
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export const getCartFromState = (state: any) => state.cart.cartItems;

function* calculateOrderPrice() {
  try {
    const cartItems = yield select(getCartFromState);

    let price = 0;
    cartItems.map((item: any) => {
      price = price + parseFloat(item.quantity) * parseFloat(item.price);
    });

    yield put({ type: CHECKOUT_CALC, payload: price.toFixed(2) });
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export function* cartAddWatcher() {
  yield takeLatest(ADD_TO_CART, addToCart);
}

export function* watchCart() {
  yield takeLatest(GET_CART, getCartItems);
}

export function* watchRemoveFromCart() {
  yield takeLatest(REMOVE_FROM_CART, removeFromCartSaga);
}

export function* watchRecalculate() {
  yield takeLatest(RECALCULATE_CART, cartRecalculate);
}
