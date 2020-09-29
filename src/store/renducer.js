import { combineReducers } from 'redux';
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
//多个reducer合并，库
const cReducer = combineReducers({
  recommend: recommendReducer
})
export default cReducer