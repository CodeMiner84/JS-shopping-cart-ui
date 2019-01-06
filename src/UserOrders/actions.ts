import { createActions } from 'redux-actions';
import { REQ_ORDERS, RECV_ORDERS } from './actionTypes';
import { OrderProps } from './models/UserOrder';

const actions = createActions(
  {
    RECV_ORDERS: (orders: OrderProps[]) => orders,
  },
  REQ_ORDERS,
);

export const getOrders = actions.reqOrders;
export const recvOrders = actions.recvOrders;
