import actionTypes from './actionTypes';

type State = typeof initialState;

const initialState = {
  price: 0,
  shippingCost: 0,
  paymentCost: 0,
};

export default function(state: State = initialState, action: any) {
  switch (action.type) {
    case actionTypes.CHECKOUT_CALC:
      return {
        ...state,
        price: action.payload,
      };
    case actionTypes.ORDER_PLACED:
      return initialState;
    default:
      return state;
  }
}
