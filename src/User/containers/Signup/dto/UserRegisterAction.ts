export interface UserRegisterAction {
  type: string;
  payload: {
    token: string;
  };
}
