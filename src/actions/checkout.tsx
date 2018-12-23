import actionTypes from '../actionTypes/checkout';

export const createOrder = (order: any) => ({
  type: actionTypes.PLACE_ORDER,
});
