import actionTypes from '../actionTypes/product';
import { DefaultAppProps, AppState } from '../application/index';

export default function(state: AppState = DefaultAppProps, action: any) {
  switch (action.type) {
    case actionTypes.RECV_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: {},
        loading: true,
      };
    default:
      return state;
  }
}
