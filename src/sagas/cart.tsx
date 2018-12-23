import * as actions from '../actions';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import actionTypes from '../actionTypes/product';
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

function* getCartItems() {
  try {
    const token = getToken();
    const response = yield call(() => getCart(token));

    yield put({ type: cartTypes.RECV_CART, payload: response.data });
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export const getCustomerId = (state: any) => state.auth.user._id;

function* addToCart(action: AddToCart) {
  try {
    const token = getToken();
    if (!token) {
      message.error('You need to sign in to add product to cart');
      return;
    }

    const customerId = yield select(getCustomerId);
    const response = yield call(() =>
      addProductToCart(token, customerId, action.product),
    );
    yield put({ type: actionTypes.ADDED_TO_CART, payload: response });
    message.success('Product is added to cart!');
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

function* removeFromCartSaga(action: RemoveFromCartProps) {
  try {
    yield call(() => removeFromCart(action.id));
    yield put({ type: cartTypes.GET_CART });
    message.success('Product was removed from cart!');
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

function* cartRecalculate(action: RecalculateProps) {
  try {
    const token = getToken();
    const response = yield call(() => recalculateCartItem(action.id, action.quantity));

    yield put({ type: cartTypes.RECALCULATED, payload: action });
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
