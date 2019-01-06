import {
  REQ_USER_LOGIN,
  REQ_USER_REGISTER,
  RECV_USER_REGISTRATION,
  RECV_USER_LOGIN,
  TOKEN_REQUEST,
  USER_AUTH,
  REQ_LOGOUT,
  RECV_ERROR,
} from './actionTypes';

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
  },
};

export default function(state: State = initialState, action: any) {
  switch (action.type) {
    case REQ_USER_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case REQ_USER_REGISTER:
      return {
        ...state,
        loading: true,
      };
    case RECV_USER_REGISTRATION:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        logged: action.payload.token ? true : false,
        user: action.payload.user,
      };
    case RECV_USER_LOGIN:
      return {
        ...state,
        loading: false,
        logged: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case TOKEN_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case USER_AUTH:
      return {
        ...state,
        loading: false,
        logged: action.payload._id ? true : false,
        user: action.payload,
      };
    case REQ_LOGOUT:
      return {
        ...state,
        logged: false,
      };
    case RECV_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
