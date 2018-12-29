import actionTypes from '../actionTypes/cart';
import cartTypes from '../actionTypes/cart';
import checkoutTypes from '../actionTypes/checkout';
import { DefaultAppProps, AppState } from '../application/index';
import { CartItem } from 'src/models/cart';

export default function(state: AppState = DefaultAppProps, action: any) {
  switch (action.type) {
    case checkoutTypes.ORDER_PLACED:
      return DefaultAppProps;
    case actionTypes.RECV_CART:
      return {
        cartItems: action.payload,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ITEM_REMOVED:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item._id !== action.id),
      };
    case actionTypes.ADDED_TO_CART:
      let newCartItems: CartItem[] = state.cartItems || [];

      newCartItems = Object.keys(state.cartItems).map((key: any) => {
        if (state.cartItems[key]._id === action.payload._id) {
          return {
            ...state.cartItems[key],
            quantity: state.cartItems[key].quantity + 1,
          };
        }

        return state.cartItems[key];
      });

      if (
        Object.keys(newCartItems).filter(
          (key: any) => newCartItems[key]._id === action.payload._id,
        ).length === 0
      ) {
        newCartItems.push({
          _id: action.payload._id,
          name: action.payload.title,
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
      const { id, quantity } = action;
      return {
        ...state,
        cartItems: state.cartItems.map((item: CartItem) => {
          if (item._id === id && quantity > 0) {
            item.quantity = quantity;

            return item;
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
