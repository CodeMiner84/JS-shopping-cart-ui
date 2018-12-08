export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function getDataRequested() {
  console.log('akcja reduxowa REQUEST');
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

export const getNews = () => ({
  type: 'GET_NEWS',
});
