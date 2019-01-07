import { createActions } from 'redux-actions';

export const { loading, loaded, failure: getFailure } = createActions({
  LOADING: () => true,
  LOADED: () => false,
  FAILURE: (error: string) => error,
});
