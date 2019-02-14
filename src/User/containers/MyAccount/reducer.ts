export const UserReducer = {
  PERSONAL_DATA_UPDATED: (state: any, action: any) => {
    return {
      ...state,
      user: {
        ...state.user,
        ...action.payload,
      },
    };
  },
  REQ_LOGOUT: (state: any, action: any) => ({
    ...state,
    logged: false,
  }),
  USER_AUTH: (state: any, action: any) => {
    console.log('in userAuth', action.payload);

    return {
      ...state,
      loading: false,
      logged: action.payload.id ? true : false,
      user: action.payload,
    };
  },
};
