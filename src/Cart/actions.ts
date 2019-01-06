import {
  GET_CART,
  ADDED_TO_CART,
  RECV_CART,
  ADD_TO_CART,
  RECALCULATED,
  REMOVE_FROM_CART,
  ITEM_REMOVED,
} from './actionTypes';
import { createActions } from 'redux-actions';
import { CLEAR_CART } from './actionTypes';

export const {
  getCart,
  addToCart,
  addedToCart,
  recalculateCart,
  removeFromCart,
  recvCart,
  itemRemoved,
  recalculated,
  clearCart,
} = createActions(
  {
    RECALCULATE_CART: (id: string, quantity: number) => ({
      id,
      quantity,
    }),
  },
  ADD_TO_CART,
  GET_CART,
  ADDED_TO_CART,
  RECV_CART,
  REMOVE_FROM_CART,
  ITEM_REMOVED,
  RECALCULATED,
  CLEAR_CART,
);
