import { handleActions } from 'redux-actions';

type State = typeof initialState;

const initialState = {
  price: 0,
  shippingCost: 0,
  paymentCost: 0,
};

export default handleActions(
  {
    CHECKOUT_CALC: (state: State = initialState, action: any) => ({
      ...state,
      price: action.payload,
    }),
    ORDER_PLACED: (state: State = initialState, action: any) => initialState,
  },
  initialState,
);
