import { SignInAction } from './dto/SignInAction';
import { initialState } from '../../reducer';

type State = typeof initialState;

export const SignInReducer = {
  USER_LOGIN: (state: State = initialState, action: SignInAction) => ({
    ...state,
    logged: true,
    user: action.payload.user,
    token: action.payload.token,
    toggleSignIn: false,
  }),
  TOGGLE_SIGNIN: (state: State = initialState) => ({
    ...state,
    toggleSignIn: !state.toggleSignIn,
  }),
};
