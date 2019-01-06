import { createAction } from 'redux-actions';
import { REQ_ORDERS } from './actionTypes';

export const getOrders = createAction(REQ_ORDERS);
