import { PersonalDataInputModel } from './PersonalDataInputModel';

export interface UserUpdateAction {
  type: string;
  payload: PersonalDataInputModel;
}
