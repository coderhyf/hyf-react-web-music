import { combineReducers } from 'redux-immutable';
// 推荐
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
// 排行榜
import { reducer as rankingReducer } from '../pages/discover/c-pages/ranking/store';
//多个reducer合并，库
const cReducer = combineReducers({
  recommend: recommendReducer,
  rankingReducer
})
export default cReducer