import { createActions } from 'redux-actions';
import { GET_PRODUCTS } from './actionTypes';
import { ProductModel } from './models/product';

export const { recvProducts: receiveProducts, getProducts: getProducts } = createActions(
  {
    RECV_PRODUCTS: (products: ProductModel[]) => products,
  },
  GET_PRODUCTS,
);
