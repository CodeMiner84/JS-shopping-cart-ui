import { combineReducers } from 'redux';
import cart from './Cart/reducer';
import product from './Dashboard/reducer';
import auth from './Auth/reducer';
import checkout from './Checkout/reducer';
import orders from './Account/MyOrders/reducer';
import app from './Common/reducer';

export default combineReducers({
  app,
  auth,
  cart,
  product,
  checkout,
  orders,
});
