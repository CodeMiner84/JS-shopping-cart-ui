import { handleActions } from 'redux-actions';

type State = typeof initialState;

const initialState = { loading: false };

export default handleActions(
  {
    LOADING: (state: State = initialState) => ({
      ...state,
      loading: true,
    }),
    LOADED: (state: State = initialState) => ({
      ...state,
      loading: false,
    }),
  },
  initialState,
);
