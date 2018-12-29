import * as actions from '../actions';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import actionTypes from '../actionTypes/product';
import checkoutTypes from '../actionTypes/checkout';
import cartTypes from '../actionTypes/cart';
import { sleep } from '../helpers/index';
import { ProductModel } from '../models/product';
import { push } from 'react-router-redux';
import {
  getCart,
  addProductToCart,
  removeFromCart,
  recalculateCartItem,
} from '../helpers/request';
import { getToken } from '../helpers/auth';
import { CartItem } from '../models/cart';
import { message } from 'antd';

interface AddToCart {
  type: string;
  product: ProductModel;
}
interface RemoveFromCartProps {
  type: string;
  id: string;
}

interface RecalculateProps {
  type: string;
  id: string;
  quantity: number;
}

export function* loadCartItems() {
  try {
    const token = getToken();
    if (token) {
      const response = yield call(() => getCart(token));
      yield put({ type: cartTypes.RECV_CART, payload: response.data });
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
    yield syncProductOnAdd(action);
    yield put({ type: actionTypes.ADDED_TO_CART, payload: action.product });
    yield calculateOrderPrice();
    message.success('Product is added to cart!');
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

function* syncProductOnAdd(action: AddToCart) {
  try {
    const token = getToken();
    if (!token) {
      return;
    }

    const customerId = yield select(getCustomerId);
    yield call(() => addProductToCart(token, customerId, action.product));
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

function* removeFromCartSaga(action: RemoveFromCartProps) {
  try {
    yield call(() => removeFromCart(action.id));
    yield put({ type: cartTypes.ITEM_REMOVED, id: action.id });
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
      yield call(() => recalculateCartItem(action.id, action.quantity));
    }
    yield put({ type: cartTypes.RECALCULATED, payload: action });

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

    yield put({ type: checkoutTypes.CHECKOUT_CALC, payload: price.toFixed(2) });
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export function* cartAddWatcher() {
  yield takeLatest(actionTypes.ADD_TO_CART, addToCart);
}

export function* watchCart() {
  yield takeLatest(cartTypes.GET_CART, getCartItems);
}

export function* watchRemoveFromCart() {
  yield takeLatest(cartTypes.REMOVE_FROM_CART, removeFromCartSaga);
}

export function* watchRecalculate() {
  yield takeLatest(cartTypes.RECALCULATE, cartRecalculate);
}
