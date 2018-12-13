import actionTypes from '../actionTypes/auth';

interface AuthState {
  readonly loading: boolean;
  readonly token: string;
}

const AuthProps = {
  loading: false,
  token: '',
};

export default function(state: AuthState = AuthProps, action: any) {
  switch (action.type) {
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
    default:
      return state;
  }
}
