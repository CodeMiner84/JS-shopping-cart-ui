import actionTypes from '../actionTypes/auth';

interface AuthState {
  readonly loading: boolean;
  readonly token: string;
  readonly user: UserProps;
}

interface UserProps {
  readonly id?: string;
  readonly email?: string;
}

const AuthProps = {
  loading: false,
  token: '',
  user: {},
};

export default function(state: AuthState = AuthProps, action: any) {
  switch (action.type) {
    case actionTypes.REQ_USER_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.REQ_USER_REGISTER:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.RECV_USER_REGISTRATION:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.RECV_USER_LOGIN:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.TOKEN_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.USER_AUTH:
      return {
        ...state,
        loading: false,
        auth: true,
        user: action.payload.id,
      };
    default:
      return state;
  }
}
