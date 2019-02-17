export const SignUpReducer = {
  USER_REGISTER: (state: any, action: any) => ({
    ...state,
    token: action.payload.token,
    logged: action.payload.token ? true : false,
    toggleSignUp: false,
  }),
  TOGGLE_SIGNUP: (state: any, action: any) => ({
    ...state,
    toggleSignUp: !state.toggleSignUp,
  }),
};
