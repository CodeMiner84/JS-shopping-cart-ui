import actionTypes from './actionTypes';

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
        user: action.payload.user,
        token: action.payload.token,
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
        logged: action.payload._id ? true : false,
        user: action.payload,
      };
    case actionTypes.REQ_LOGOUT:
      return {
        ...state,
        logged: false,
      };
    case actionTypes.RECV_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
