const reducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case 'NEWS_RECEIVED':
      console.log('action.payload', action.payload);
      return { ...state, products: action.payload };
    case 'GET_NEWS':
      return { ...state, loading: true };
    default:
      return state;
  }
};
export default reducer;
