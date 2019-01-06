import actionTypes from './actionTypes';

type State = typeof initialState;

const initialState = {
  orders: [],
};

export default (state: State = initialState, action: any) => {
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
