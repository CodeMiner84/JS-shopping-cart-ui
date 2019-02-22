import { handleActions } from 'redux-actions';

type State = typeof initialState;

const initialState = {
  price: 0,
  shippingCost: 0,
  paymentCost: 0,
};

export default handleActions(
  {
    ORDER_PLACED: () => initialState,
    CHECKOUT_CALC: (state: State = initialState, action: any) => ({
      ...state,
      price: action.payload,
    }),
  },
  initialState,
);
