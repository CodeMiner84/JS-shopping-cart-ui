import actionTypes from '../actionTypes/auth';

interface AuthState {
  readonly loading: boolean;
  readonly token: string;
  readonly logged: boolean;
  readonly user: LoggedUser;
}

interface LoggedUser {
  id: string;
  name: string;
  email: string;
}

const AuthProps = {
  loading: false,
  token: '',
  logged: false,
  user: {
    id: '',
    name: '',
    email: '',
  },
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
        token: action.payload.token,
        logged: action.payload.token ? true : false,
        user: action.payload.user,
      };
    case actionTypes.RECV_USER_LOGIN:
      return {
        ...state,
        loading: false,
        logged: true,
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
        logged: action.payload.id ? true : false,
        user: action.payload,
      };
    case actionTypes.REQ_LOGOUT:
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
}
