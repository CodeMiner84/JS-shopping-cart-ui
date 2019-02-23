import { CartItemModel } from '../models/index';
export interface RecvCartAction {
  type: string;
  payload: CartItemModel[];
}
