import { createActions } from 'redux-actions';
import { UPDATE_PERSONAL_DATA, PERSONAL_DATA_UPDATED } from './actionTypes';

export const { updatePersonalData, personalDataUpdated } = createActions(
  {},
  UPDATE_PERSONAL_DATA,
  PERSONAL_DATA_UPDATED,
);
