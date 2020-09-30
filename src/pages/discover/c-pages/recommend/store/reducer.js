import { Map } from 'immutable';

import * as actionTypes from './constants';


const defaultState = Map({
  topBanners: []
})
//  轮播图
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return state.set('topBanners', action.topBanners);
    default:
      return state
  }
}
export default reducer;