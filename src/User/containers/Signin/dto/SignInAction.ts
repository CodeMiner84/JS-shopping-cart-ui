export interface SignInAction {
  type: string;
  payload: {
    token: string;
    user: {
      email: string;
      username: string;
      firstName: string;
      lastName: string;
    };
  };
}
