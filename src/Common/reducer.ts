import { handleActions } from 'redux-actions';

type State = typeof initialState;

const initialState = { loading: false };

export default handleActions(
  {
    LOADING: (state: State = initialState, action: any) => ({
      ...state,
      loading: true,
    }),
    LOADED: (state: State = initialState, action: any) => ({
      ...state,
      loading: false,
    }),
  },
  initialState,
);
