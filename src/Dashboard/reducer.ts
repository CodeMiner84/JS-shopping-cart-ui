import actionTypes from './actionTypes';
import { ProductModel } from '.';

type State = {
  products: ProductModel[];
};

export const initialState: State = {
  products: [],
};

export default function(state: State = initialState, action: any) {
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
