import actionTypes from '../actionTypes/product';

const reducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case 'NEWS_RECEIVED':
      return { ...state, products: action.payload };
    case actionTypes.GET_PRODUCTS:
      return { ...state, loading: true };
    default:
      return state;
  }
};
export default reducer;
