import { UserUpdateAction } from './dtos/UserUpdateAction';
import { UserAuthAction } from './dtos/UserAuthAction';

export const UserReducer = {
  PERSONAL_DATA_UPDATED: (state: any, action: UserUpdateAction) => {
    return {
      ...state,
      user: {
        ...state.user,
        ...action.payload,
      },
    };
  },
  REQ_LOGOUT: (state: any) => ({
    ...state,
    logged: false,
  }),
  USER_AUTH: (state: any, action: UserAuthAction) => ({
    ...state,
    loading: false,
    logged: action.payload.id ? true : false,
    user: action.payload,
  }),
};
