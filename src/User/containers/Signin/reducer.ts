import { SignInAction } from './dto/SignInAction';

export const SignInReducer = {
  USER_LOGIN: (state: any, action: SignInAction) => ({
    ...state,
    logged: true,
    user: action.payload.user,
    token: action.payload.token,
    toggleSignIn: false,
  }),
  TOGGLE_SIGNIN: (state: any) => ({
    ...state,
    toggleSignIn: !state.toggleSignIn,
  }),
};
