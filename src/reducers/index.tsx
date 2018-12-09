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
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADDED_TO_CART:
      return {
        ...state,
        loading: false,
        cart_products: action.addedProduct,
      };
    default:
      return state;
  }
};
export default reducer;
