import { handleActions } from 'redux-actions';
import { SignInReducer } from './containers/Signin/reducer';
import { SignUpReducer } from './containers/Signup/reducer';
import { UserReducer } from './containers/MyAccount/reducer';
type State = typeof initialState;

const initialState = {
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
};

const combinedReducers = {
  ...SignInReducer,
  ...SignUpReducer,
  ...UserReducer,
};

export default handleActions(combinedReducers, initialState);
