import * as actionTypes from './constants';
import {
  getTopList,
  getRankingList
} from '@/service/ranking';

// 特色榜
const changeTopList = res => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.list
})

export const getTopListAction = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(changeTopList(res))
    })
  }
}
export const changeCurrentIndex = index => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex: index
})
// 排行榜内容
const changePlayListAction = (res) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: res.playlist
})
export const getRankingListAction = id => {
  return dispatch => {
    getRankingList(id).then(res => {
      dispatch(changePlayListAction(res))
    })
  }
}