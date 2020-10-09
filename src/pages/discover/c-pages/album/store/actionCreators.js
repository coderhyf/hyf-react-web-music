import * as actionTypes from './constants';
import {
  getHotAlbums,
  getTopAlbums
} from '@/service/album';

// 热门新碟
const changeHotAlbumsAction = res => ({
  type: actionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums: res.albums,
})
export const getHotAlbumsAction = () => {
  return dispatch => {
    getHotAlbums().then(res => {
      dispatch(changeHotAlbumsAction(res))
    })
  }
}
// 全部新碟
const getTopAlbumsListAction = res => ({
  type: actionTypes.CHANGE_TOP_ALBUMS,
  topAlbums: res.albums
})
const getTopAlbumsTotalAction = total => ({
  type: actionTypes.CHANGE_TOP_TOTAL,
  topTotal: total
})
export const getTopAlbumsAction = page => {
  return dispatch => {
    getTopAlbums(30, (page-1) * 30).then(res => {
      dispatch(getTopAlbumsListAction(res))
      dispatch(getTopAlbumsTotalAction(res.total))
    })
  }
}