import { createActions } from 'redux-actions';
import { RECV_PRODUCTS, GET_PRODUCTS } from './actionTypes';

export const { receiveProducts, getProducts } = createActions(
  {},
  RECV_PRODUCTS,
  GET_PRODUCTS,
);
