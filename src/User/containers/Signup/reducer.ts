export const SignUpReducer = {
  USER_REGISTER: (state: any, action: any) => ({
    ...state,
    token: action.payload.token,
    logged: action.payload.token ? true : false,
  }),
};
