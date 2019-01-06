import { createActions } from 'redux-actions';
import { PLACE_ORDER, CHECKOUT_CALC, ORDER_PLACED } from './actionTypes';

export const { placeOrder, checkoutCalc, orderPlaced } = createActions(
  {},
  PLACE_ORDER,
  CHECKOUT_CALC,
  ORDER_PLACED,
);
