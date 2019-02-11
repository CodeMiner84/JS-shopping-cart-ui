import { PERSONAL_DATA_UPDATED } from './actionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
  user: [],
};

type State = {};

export default handleActions(
  {
    PERSONAL_DATA_UPDATED: (state: any, action: any) => {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    },
  },
  initialState,
);
