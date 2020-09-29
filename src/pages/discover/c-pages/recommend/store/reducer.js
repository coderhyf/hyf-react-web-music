import * as actionTypes from './constants';
const defaultState = {
  topBanners: []
}
//  轮播图
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return { ...state, topBanners: [] }
    default:
      return state;
  }
} 
export default reducer;