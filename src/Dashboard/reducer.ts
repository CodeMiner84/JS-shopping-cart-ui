import { handleActions } from 'redux-actions';
import { ProductModel } from '.';
import { RecvProductAction } from './dto/RecvProductAction';

type State = {
  products: ProductModel[];
};

export const initialState: State = {
  products: [],
};

export default handleActions(
  {
    RECV_PRODUCTS: (state: State = initialState, action: RecvProductAction) => ({
      ...state,
      products: action.payload,
    }),
    GET_PRODUCTS: (state: State = initialState) => ({
      ...state,
      products: {},
    }),
  },
  initialState,
);
