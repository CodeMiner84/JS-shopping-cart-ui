import actionTypes from '../actionTypes/product';
import { DefaultAppProps, IAppState } from '../application/index';

const reducer = (state: IAppState = DefaultAppProps, action: any) => {
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
};
export default reducer;
