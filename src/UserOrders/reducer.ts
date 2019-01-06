import { handleActions } from 'redux-actions';
import { OrderProps } from './models/UserOrder';

type State = {
  orders: OrderProps[];
};

const initialState = {
  orders: [],
};

export default handleActions(
  {
    RECV_ORDERS: (state: State = initialState, action: any) => ({
      ...state,
      orders: action.orders,
    }),
  },
  initialState,
);
