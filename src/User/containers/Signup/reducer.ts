import { UserRegisterAction } from './dto/UserRegisterAction';
import { initialState } from '../../reducer';

type State = typeof initialState;

export const SignUpReducer = {
  USER_REGISTER: (state: State = initialState, action: UserRegisterAction) => ({
    ...state,
    token: action.payload.token,
    logged: action.payload.token ? true : false,
    toggleSignUp: false,
  }),
  TOGGLE_SIGNUP: (state: State = initialState) => ({
    ...state,
    toggleSignUp: !state.toggleSignUp,
  }),
};
