import { Map } from 'immutable';

import * as actionTypes from './constants';


const defaultState = Map({
  topBanners: [],
  hotRecommneds: [],
  newAlbum: [],

  upRanking: {},
  newRanking: {},
  orgRanking: {},

  settleSinger: []
})
//  轮播图
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return state.set('topBanners', action.topBanners);
    case actionTypes.CHANGE_RECOMMENDS:
      return state.set('hotRecommneds', action.hotRecommneds);
    case actionTypes.CHANGE_NEWABLUM:
      return state.set('newAlbum', action.newAlbum);


    case actionTypes.CHANGE_TOP_LIST:
      return state.set('upRanking', action.upRanking);
    case actionTypes.CHANGE_NEW_LIST:
      return state.set('newRanking', action.newRanking);
    case actionTypes.CHANGE_ORG_LIST:
      return state.set('orgRanking', action.orgRanking);

    case actionTypes.CHANGE_SETTLE_SONGER:
      return state.set('settleSinger', action.settleSinger)

    default:
      return state
  }
}
export default reducer;