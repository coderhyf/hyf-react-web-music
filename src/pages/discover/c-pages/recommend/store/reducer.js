import { Map } from 'immutable';

import * as actionTypes from './constants';


const defaultState = Map({
  topBanners: [],
  hotRecommneds: [],
  newAlbum: []
})
//  轮播图
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return state.set('topBanners', action.topBanners);
    case actionTypes.CHANGE_RECOMMENDS:
     return state.set('hotRecommneds', action.hotRecommneds);
     case actionTypes.CHANGE_NEWABLUM:
       return state.set('newAlbum', action.newAlbum)
    default:
      return state
  }
}
export default reducer;