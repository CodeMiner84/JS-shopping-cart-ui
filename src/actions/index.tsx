export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
import actionTypes from '../actionTypes/product';
import cartActions from '../actionTypes/cart';
import { ProductModel } from '../models/product';

export function getDataRequested() {
  return {
    type: 'REQUEST',
  };
}

export function getSuccess(data: any) {
  return {
    type: 'SUCCESS',
    payload: data,
  };
}

export function getFailure(data: any) {
  return {
    type: 'FAILURE',
    payload: data,
  };
}

export const receiveProducts = (products: {}) => ({
  type: actionTypes.RECV_PRODUCTS,
  loading: true,
  products,
});

export const getProducts = () => ({
  type: actionTypes.GET_PRODUCTS,
  loading: false,
});

export const addToCart = (product: ProductModel) => ({
  type: actionTypes.ADD_TO_CART,
  product,
});

export const AddedToCart = () => ({
  type: actionTypes.ADDED_TO_CART,
});

export const recalculateCart = (id: string, quantity: number) => ({
  type: cartActions.RECALCULATE,
  id,
  quantity,
});

export const removeFromCart = (id: string) => ({
  type: cartActions.REMOVE_FROM_CART,
  id,
});
