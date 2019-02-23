import { put, takeLatest, call, select } from 'redux-saga/effects';
import { ProductModel } from '../Dashboard';
import { getToken } from '../User/selectors';
import { message } from 'antd';
import {
  RECALCULATE_CART,
  REMOVE_FROM_CART,
  GET_CART,
  ADD_TO_CART,
} from './actionTypes';
import { loading, loaded } from '../Common/actions';
import { getFailure } from '../Common/actions';
import { recvCart, addedToCart, itemRemoved, recalculated } from './actions';
import { checkoutCalc } from '../Checkout/actions';
import routes from '../Common/routes';
import { getRequest, deleteRequest, patchRequest, postRequest } from '../Common/api';
import { CartItemModel } from './models/index';

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

export const getUserId = (state: any) => state.auth.user.id;

export const getCartFromState = (state: any) => state.cart.cartItems;

export function* loadCartItems() {
  try {
    const token = getToken();
    if (token) {
      const response = yield call(() => getRequest(routes.cartList));
      yield put(recvCart(response.data));
    }
  } catch (e) {
    yield put(getFailure(e));
  }
}

export function* syncCartItems() {
  const cartItems = yield select(getCartFromState);
  const userId = yield select(getUserId);
  cartItems.map((item: CartItemModel) => {
    postRequest(routes.addToCart, {
      ...item,
      userId,
    });
  });
}

function* getCartItems() {
  try {
    yield put(loading());
    yield loadCartItems();
    yield calculateOrderPrice();
    yield put(loaded());
  } catch (e) {
    yield put(loaded());
    yield put(getFailure(e));
  }
}

function* addToCart(action: AddToCart) {
  try {
    yield put(loading());
    yield syncProductOnAdd(action.payload);
    yield put(addedToCart(action.payload));
    yield calculateOrderPrice();
    message.success('Product is added to cart!');
    yield put(loaded());
  } catch (e) {
    yield put(loaded());
    yield put(getFailure(e));
  }
}

function* syncProductOnAdd(action: ProductModel) {
  try {
    const token = getToken();
    if (!token) {
      return;
    }

    const params = {
      productId: action.id,
      userId: yield select(getUserId),
      title: action.title,
      price: action.price,
      quantity: action.quantity ? action.quantity : 1,
    };
    yield call(() => postRequest(routes.addToCart, params));
  } catch (e) {
    yield put(getFailure(e));
  }
}

function* removeFromCartSaga(action: RemoveFromCartProps) {
  try {
    yield put(loading());

    const url = routes.removeFromCart.replace(':id', action.payload);
    yield call(() => deleteRequest(url));
    yield put(itemRemoved(action.payload));
    message.success('Product was removed from cart!');
    yield calculateOrderPrice();
    yield put(loaded());
  } catch (e) {
    yield put(loaded());
    yield put(getFailure(e));
    message.error('Unable to remove product from cart!');
  }
}

function* cartRecalculate(action: RecalculateProps) {
  try {
    const token = getToken();
    if (token) {
      yield call(() =>
        patchRequest(routes.cartRecalculate, {
          id: action.payload.id,
          quantity: action.payload.quantity,
        }),
      );
    }
    yield put(recalculated(action.payload));

    yield calculateOrderPrice();
  } catch (e) {
    yield put(getFailure(e));
  }
}

function* calculateOrderPrice() {
  try {
    const cartItems = yield select(getCartFromState);

    let price = 0;
    cartItems.map((item: any) => {
      price = price + parseFloat(item.quantity) * parseFloat(item.price);
    });
    yield put(checkoutCalc(price.toFixed(2)));
  } catch (e) {
    yield put(getFailure(e));
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
