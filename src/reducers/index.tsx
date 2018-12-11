import actionTypes from '../actionTypes/product';
import cartTypes from '../actionTypes/cart';
import { DefaultAppProps, AppState } from '../application/index';
import { CartItem } from 'src/models/cart';

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
          image: action.payload.image,
          quantity: 1,
        });
      }

      return {
        ...state,
        loading: false,
        cartItems: newCartItems,
      };
    case cartTypes.RECALCULATE:
      console.log('state', state);
      return {
        ...state,
        cartItems: state.cartItems.map((item: CartItem) => {
          item.quantity = 3;
          return item;
        }),
      };
    default:
      return state;
  }
};
export default reducer;
