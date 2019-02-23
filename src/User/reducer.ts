import { handleActions } from 'redux-actions';
import { SignInReducer } from './containers/Signin/reducer';
import { SignUpReducer } from './containers/Signup/reducer';
import { UserReducer } from './containers/MyAccount/reducer';

export const initialState = {
  error: false,
  loading: false,
  token: '',
  logged: false,
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
  },
  toggleSignIn: false,
  toggleSignUp: false,
};

const combinedReducers = {
  ...SignInReducer,
  ...SignUpReducer,
  ...UserReducer,
};

export default handleActions(combinedReducers, initialState);
