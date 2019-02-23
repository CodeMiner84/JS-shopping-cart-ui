import { UserRegisterAction } from './dto/UserRegisterAction';

export const SignUpReducer = {
  USER_REGISTER: (state: any, action: UserRegisterAction) => ({
    ...state,
    token: action.payload.token,
    logged: action.payload.token ? true : false,
    toggleSignUp: false,
  }),
  TOGGLE_SIGNUP: (state: any) => ({
    ...state,
    toggleSignUp: !state.toggleSignUp,
  }),
};
