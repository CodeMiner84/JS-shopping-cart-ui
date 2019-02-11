import { combineReducers } from 'redux';
import cart from './Cart/reducer';
import product from './Dashboard/reducer';
import auth from './User/reducer';
import checkout from './Checkout/reducer';
import orders from './User/containers/MyOrders/reducer';
import app from './Common/reducer';
import user from './User/containers/MyAccount/reducer';

export default combineReducers({
  app,
  auth,
  cart,
  product,
  checkout,
  orders,
  user,
});
