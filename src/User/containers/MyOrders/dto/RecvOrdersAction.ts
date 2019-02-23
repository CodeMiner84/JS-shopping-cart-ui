import { OrderProps } from '../models/UserOrder';

export interface RecvOrderSAction {
  type: string;
  payload: OrderProps[];
}
