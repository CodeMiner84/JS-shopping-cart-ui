import { handleActions } from 'redux-actions';
import { ProductModel } from '.';

type State = {
  products: ProductModel[];
};

export const initialState: State = {
  products: [],
};

export default handleActions(
  {
    RECV_PRODUCTS: (state: State = initialState, action: any) => ({
      ...state,
      products: action.payload,
    }),
    GET_PRODUCTS: (state: State = initialState, action: any) => ({
      ...state,
      products: {},
    }),
  },
  initialState,
);
