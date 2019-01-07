import { createActions } from 'redux-actions';
import { REQ_ORDERS } from './actionTypes';
import { OrderProps } from './models/UserOrder';

export const { reqOrders: getOrders, recvOrders: recvOrders } = createActions(
  {
    RECV_ORDERS: (orders: OrderProps[]) => orders,
  },
  REQ_ORDERS,
);
