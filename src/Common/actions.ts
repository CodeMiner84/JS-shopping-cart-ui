import { createActions } from 'redux-actions';

export function getDataRequested() {
  return {
    type: 'REQUEST',
  };
}

export function getSuccess(data: any) {
  return {
    type: 'SUCCESS',
    payload: data,
  };
}

export function getFailure(data: any) {
  return {
    type: 'FAILURE',
    payload: data,
  };
}

export const { loading, loaded } = createActions({
  LOADING: () => true,
  LOADED: () => false,
});
