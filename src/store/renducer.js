import { combineReducers } from 'redux-immutable';
// 推荐
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
// 排行榜
import { reducer as rankingReducer } from '../pages/discover/c-pages/ranking/store';
// 歌单
import { reducer as songsReducer } from '../pages/discover/c-pages/songs/store';
// 新碟上架
import { reducer as albumReducer } from '../pages/discover/c-pages/album/store';
//多个reducer合并，库
const cReducer = combineReducers({
  recommend: recommendReducer,
  rankingReducer,
  songsReducer,
  albumReducer
})
export default cReducer