import { handleActions } from 'redux-actions';
import { CheckoutCalcAction } from './dto/CheckoutCalcAction';

const initialState = {
  price: 0,
  shippingCost: 0,
  paymentCost: 0,
};

type State = typeof initialState;

export default handleActions(
  {
    ORDER_PLACED: () => initialState,
    CHECKOUT_CALC: (state: State = initialState, action: CheckoutCalcAction) => ({
      ...state,
      price: action.payload,
    }),
  },
  initialState,
);
