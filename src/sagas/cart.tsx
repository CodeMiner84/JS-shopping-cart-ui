import * as actions from '../actions';
import { put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../actionTypes/product';
import { sleep } from '../helpers/index';
import { ProductModel } from '../models/product';
import { push } from 'react-router-redux';

interface AddToCart {
  type: string;
  product: ProductModel;
}

function* addToCart(action: AddToCart) {
  try {
    yield sleep(0);
    const response = action.product;

    yield put({ type: actionTypes.ADDED_TO_CART, payload: response });
    yield put(push('/'));
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export function* cartAddWatcher() {
  yield takeLatest(actionTypes.ADD_TO_CART, addToCart);
}
