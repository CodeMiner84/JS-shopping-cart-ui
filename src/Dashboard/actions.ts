import { createActions } from 'redux-actions';
import { GET_PRODUCTS } from './actionTypes';
import { ProductModel } from './models/product';

const actions = createActions(
  {
    RECV_PRODUCTS: (products: ProductModel[]) => products,
  },
  GET_PRODUCTS,
);

export const receiveProducts = actions.recvProducts;
export const getProducts = actions.getProducts;
