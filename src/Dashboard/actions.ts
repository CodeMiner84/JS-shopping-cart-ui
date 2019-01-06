import actionTypes from './actionTypes';

export const receiveProducts = (products: {}) => ({
  type: actionTypes.RECV_PRODUCTS,
  loading: true,
  products,
});

export const getProducts = () => ({
  type: actionTypes.GET_PRODUCTS,
  loading: false,
});
