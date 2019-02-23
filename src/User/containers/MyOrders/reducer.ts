import { handleActions } from 'redux-actions';
import { OrderProps } from './models/UserOrder';
import { RecvOrderSAction } from './dto/RecvOrdersAction';

type State = {
  orders: OrderProps[];
};

const initialState = {
  orders: [],
};

export default handleActions(
  {
    RECV_ORDERS: (state: State = initialState, action: RecvOrderSAction) => ({
      ...state,
      orders: action.payload,
    }),
  },
  initialState,
);
