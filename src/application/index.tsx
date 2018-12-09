import { ProductModel } from '../models/product';
import { Cart } from '../models/cart';

export interface IAppState {
  readonly loading: boolean;
  readonly products: ProductModel[];
  readonly cartItems: Cart;
}

export const DefaultAppProps: IAppState = {
  products: [],
  loading: false,
  cartItems: { title: '' },
};
