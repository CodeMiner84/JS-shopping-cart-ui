import actionTypes from './actionTypes';
import { ProductModel } from 'src/Dashboard';
import cartActions from './actionTypes';

export const getCart = () => ({
  type: actionTypes.GET_CART,
});

export const addToCart = (product: ProductModel) => ({
  type: actionTypes.ADD_TO_CART,
  product,
});

export const AddedToCart = () => ({
  type: actionTypes.ADDED_TO_CART,
});

export const recalculateCart = (id: string, quantity: number) => ({
  type: cartActions.RECALCULATE,
  id,
  quantity,
});

export const removeFromCart = (id: string) => ({
  type: cartActions.REMOVE_FROM_CART,
  id,
});
