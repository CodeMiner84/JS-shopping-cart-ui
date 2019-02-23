export interface UserAuthAction {
  type: string;
  payload: {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}
