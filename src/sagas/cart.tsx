import * as actions from '../actions';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import actionTypes from '../actionTypes/product';
import cartTypes from '../actionTypes/cart';
import { sleep } from '../helpers/index';
import { ProductModel } from '../models/product';
import { push } from 'react-router-redux';
import { getCart, addProductToCart } from '../helpers/request';
import { getToken } from '../helpers/auth';
import { CartItem } from '../models/cart';
import { message } from 'antd';

interface AddToCart {
  type: string;
  product: ProductModel;
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
    yield put(push('/cart'));
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
