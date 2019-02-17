import { createActions } from 'redux-actions';
import {
  UPDATE_PERSONAL_DATA,
  PERSONAL_DATA_UPDATED,
  CHANGE_PASSWORD,
} from './actionTypes';

export const { updatePersonalData, personalDataUpdated, changePassword } = createActions(
  {},
  UPDATE_PERSONAL_DATA,
  PERSONAL_DATA_UPDATED,
  CHANGE_PASSWORD,
);
