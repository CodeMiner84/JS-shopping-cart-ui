import { ProductModel } from 'src/Dashboard';
import { GET_CART, ADDED_TO_CART } from './actionTypes';
import { createActions } from 'redux-actions';

export const {
  getCart,
  addToCart,
  AddedToCart,
  recalculateCart,
  removeFromCart,
} = createActions(
  {
    ADD_TO_CART: (product: ProductModel) => product,
    RECALCULATE_CART: (id: string, quantity: number) => ({
      id,
      quantity,
    }),
    REMOVE_FROM_CART: (id: number) => id,
  },
  GET_CART,
  ADDED_TO_CART,
);
