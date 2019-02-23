import { ProductModel } from '../models/product';

export interface RecvProductAction {
  type: string;
  payload: ProductModel[];
}
