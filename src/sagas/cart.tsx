import * as actions from '../actions';
import { put, takeLatest, call } from 'redux-saga/effects';
import actionTypes from '../actionTypes/product';
import cartTypes from '../actionTypes/cart';
import { sleep } from '../helpers/index';
import { ProductModel } from '../models/product';
import { push } from 'react-router-redux';
import { getCart } from '../helpers/request';
import { getToken } from '../helpers/auth';
import { CartItem } from '../models/cart';

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

function* addToCart(action: AddToCart) {
  try {
    yield sleep(0);
    const response = action.product;
    const token = getToken();
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
