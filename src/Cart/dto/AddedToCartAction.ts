import { CartItemModel } from '../models/index';
export interface AddedToCartAction {
  type: string;
  payload: CartItemModel;
}
