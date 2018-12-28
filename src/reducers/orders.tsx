import actionTypes from '../actionTypes/orders';

interface OrdersState {
  orders: any[];
}

const InitialState = {
  orders: [],
};

export default (state: OrdersState = InitialState, action: any) => {
  switch (action.type) {
    case actionTypes.RECV_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    default:
      return state;
  }
};
