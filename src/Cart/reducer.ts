import { CartItemModel } from './models';
import { handleActions } from 'redux-actions';
import { RecvCartAction } from './dto/RecvCartAction';
import { AddedToCartAction } from './dto/AddedToCartAction';
import { RemovedCartItemAction } from './dto/RemovedCartItemAction';
import { RecalculateCartAction } from './dto/RecalculateCartAction';

type State = {
  cartItems: CartItemModel[];
};

const initialState = {
  cartItems: [],
};

export default handleActions(
  {
    RECV_CART: (state: State = initialState, action: RecvCartAction) => ({
      cartItems: action.payload,
    }),
    ADDED_TO_CART: (state: State = initialState, action: AddedToCartAction) => {
      let newCartItems: CartItemModel[] = state.cartItems;

      newCartItems = Object.keys(state.cartItems).map((key: string) => {
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
          (key: string) => newCartItems[key].id === action.payload.id,
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
    ITEM_REMOVED: (state: State = initialState, action: RemovedCartItemAction) => ({
      ...state,
      cartItems: state.cartItems.filter(item => item.id !== action.payload),
    }),
    RECALCULATE_CART: (state: State = initialState, action: RecalculateCartAction) => {
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
