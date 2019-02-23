import { UserUpdateAction } from './dtos/UserUpdateAction';
import { UserAuthAction } from './dtos/UserAuthAction';
import { initialState } from '../../reducer';

type State = typeof initialState;

export const UserReducer = {
  PERSONAL_DATA_UPDATED: (state: State = initialState, action: UserUpdateAction) => {
    return {
      ...state,
      user: {
        ...state.user,
        ...action.payload,
      },
    };
  },
  REQ_LOGOUT: (state: State = initialState) => ({
    ...state,
    logged: false,
  }),
  USER_AUTH: (state: State = initialState, action: UserAuthAction) => ({
    ...state,
    loading: false,
    logged: action.payload.id ? true : false,
    user: action.payload,
  }),
};
