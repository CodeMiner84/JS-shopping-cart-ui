import { RegisterUserProps } from '../../../dto/RegisterUserProps';

export interface UserRegisterAction {
  type: string;
  payload: {
    token: string;
  };
}
