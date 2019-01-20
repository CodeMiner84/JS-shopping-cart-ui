import { CartItemModel } from './models';
import { handleActions } from 'redux-actions';

type State = {
  cartItems: CartItemModel[];
};

const initialState = {
  cartItems: [],
};

export default handleActions(
  {
    RECV_CART: (state: State = initialState, action: any) => ({
      cartItems: action.payload,
    }),
    ADDED_TO_CART: (state: State = initialState, action: any) => {
      let newCartItems: CartItemModel[] = state.cartItems;

      newCartItems = Object.keys(state.cartItems).map((key: any) => {
        if (state.cartItems[key].productId === action.payload.id) {
          return {
            ...state.cartItems[key],
            quantity: state.cartItems[key].quantity + 1,
          };
        }

        return state.cartItems[key];
      });

      if (
        Object.keys(newCartItems).filter(
          (key: any) => newCartItems[key].id === action.payload.id,
        ).length === 0
      ) {
        newCartItems.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image,
          quantity: 1,
        });
      }

      return {
        ...state,
        cartItems: newCartItems,
      };
    },
    ITEM_REMOVED: (state: State = initialState, action: any) => ({
      ...state,
      cartItems: state.cartItems.filter(item => item.id !== action.payload),
    }),
    RECALCULATE_CART: (state: State = initialState, action: any) => {
      const { id, quantity } = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((item: CartItemModel) => {
          if (item.id === id && quantity > 0) {
            item.quantity = quantity;

            return item;
          }
          return item;
        }),
      };
    },
    CLEAR_CART: (state: State = initialState) => ({
      ...state,
      cartItems: [],
    }),
  },
  initialState,
);
