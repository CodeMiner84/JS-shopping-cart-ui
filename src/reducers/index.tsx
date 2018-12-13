import { combineReducers } from 'redux';
import cart from './cart';
import product from './product';
import auth from './auth';

export default combineReducers({
  auth,
  cart,
  product,
});
