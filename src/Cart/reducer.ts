import actionTypes from './actionTypes';
import cartTypes from './actionTypes';
import checkoutTypes from '../Checkout/actionTypes';
import { CartItemModel } from './models';

type State = {
  cartItems: CartItemModel[];
};

const initialState = {
  cartItems: [],
};

export default function(state: State = initialState, action: any) {
  switch (action.type) {
    case checkoutTypes.ORDER_PLACED:
      return initialState;
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
      let newCartItems: CartItemModel[] = state.cartItems || [];

      newCartItems = Object.keys(state.cartItems).map((key: any) => {
        if (state.cartItems[key].product_id === action.payload._id) {
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
      const { id, quantity } = action;
      return {
        ...state,
        cartItems: state.cartItems.map((item: CartItemModel) => {
          if (item._id === id && quantity > 0) {
            item.quantity = quantity;

            return item;
          }
          return item;
        }),
      };
    case cartTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
}
