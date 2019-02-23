import { InputPersonalDataModel } from './input.personal-data.model';

export interface UserUpdateAction {
  type: string;
  payload: InputPersonalDataModel;
}
