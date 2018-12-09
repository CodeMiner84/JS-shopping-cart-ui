import * as actions from '../actions';
import { put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../actionTypes/product';

function* addToCart() {
  try {
    const response = { title: 'test' };

    yield put({ type: actionTypes.ADDED_TO_CART, addedProduct: response });
  } catch (e) {
    yield put(actions.getFailure(e));
  }
}

export function* cartAddWatcher() {
  yield takeLatest(actionTypes.ADD_TO_CART, addToCart);
}
