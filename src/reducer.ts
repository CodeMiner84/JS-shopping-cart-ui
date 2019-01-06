import { combineReducers } from 'redux';
import cart from './Cart/reducer';
import product from './Dashboard/reducer';
import auth from './Auth/reducer';
import checkout from './Checkout/reducer';
import orders from './UserOrders/reducer';

export default combineReducers({
  auth,
  cart,
  product,
  checkout,
  orders,
});
