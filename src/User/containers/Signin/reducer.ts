export const SignInReducer = {
  USER_LOGIN: (state: any, action: any) => ({
    ...state,
    logged: true,
    user: action.payload.user,
    token: action.payload.token,
    toggleSignIn: false,
  }),
  TOGGLE_SIGNIN: (state: any, action: any) => ({
    ...state,
    toggleSignIn: !state.toggleSignIn,
  }),
};
