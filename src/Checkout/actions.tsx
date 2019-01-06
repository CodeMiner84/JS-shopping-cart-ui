import { createAction } from 'redux-actions';
import { PLACE_ORDER } from './actionTypes';

export const createOrder = createAction(PLACE_ORDER);
