import { ProductModel } from '../models/product';
import { Cart } from '../models/cart';

export interface AppState {
  readonly loading: boolean;
  readonly products: ProductModel[];
  readonly cartItems: Cart;
}

export const DefaultAppProps: AppState = {
  products: [],
  loading: false,
  cartItems: [],
};
