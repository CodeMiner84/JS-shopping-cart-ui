import actionTypes from '../actionTypes/product';
import { DefaultAppProps, AppState } from '../application/index';
import { CartItem } from '../models/cart';

const reducer = (state: AppState = DefaultAppProps, action: any) => {
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
      let newCartItems: CartItem[] = state.cartItems;

      newCartItems = Object.keys(state.cartItems).map((key: any) => {
        if (state.cartItems[key].id === action.payload._id) {
          return {
            ...state.cartItems[key],
            quantity: state.cartItems[key].quantity + 1,
          };
        }

        return state.cartItems[key];
      });

      if (
        Object.keys(newCartItems).filter(
          (key: any) => newCartItems[key].id === action.payload._id,
        ).length === 0
      ) {
        newCartItems.push({
          id: action.payload._id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
        });
      }

      return {
        ...state,
        loading: false,
        cartItems: newCartItems,
      };
    default:
      return state;
  }
};
export default reducer;
