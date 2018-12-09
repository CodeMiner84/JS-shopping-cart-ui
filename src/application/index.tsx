import { ProductModel } from '../models/product';

export interface IAppState {
  readonly loading: boolean;
  readonly products: ProductModel[];
}

export const DefaultAppProps: IAppState = {
  products: [],
  loading: false,
};
