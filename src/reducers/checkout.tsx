import actionTypes from '../actionTypes/checkout';
import { DefaultAppProps, AppState } from '../application/index';

interface CheckoutProps {
  price: number;
  shippingCost: number;
  paymentCost: number;
}

const CheckoutState: CheckoutProps = {
  price: 0,
  shippingCost: 0,
  paymentCost: 0,
};

export default function(state: CheckoutProps = CheckoutState, action: any) {
  switch (action.type) {
    case actionTypes.CHECKOUT_CALC:
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
}
