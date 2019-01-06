import { handleActions } from 'redux-actions';
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

export default handleActions(
  {
    USER_REGISTER: (state: State = initialState, action: any) => ({
      ...state,
      token: action.payload.token,
      logged: action.payload.token ? true : false,
      user: action.payload.user,
    }),
    USER_LOGIN: (state: State = initialState, action: any) => ({
      ...state,
      logged: true,
      user: action.payload.user,
      token: action.payload.token,
    }),
    USER_AUTH: (state: State = initialState, action: any) => ({
      ...state,
      loading: false,
      logged: action.payload._id ? true : false,
      user: action.payload,
    }),
    REQ_LOGOUT: (state: State = initialState, action: any) => ({
      ...state,
      logged: false,
    }),
  },
  initialState,
);
