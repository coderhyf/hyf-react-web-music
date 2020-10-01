import * as actionTypes from './constants';

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum
} from '@/service/recommend';

// 轮播图
const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BNNAER,
  topBanners: res.banners
});

export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}


// 热门推荐

const changeHotRecommnedsAction = res => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  hotRecommneds: res.result
});

export const getHotRecommnedsAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommnedsAction(res))
    })
  }
}

// 新碟上架
const changeNewAlbumsAction = res => ({
  type: actionTypes.CHANGE_NEWABLUM,
  newAlbum: res.albums
});
export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
     dispatch(changeNewAlbumsAction(res))
    })
  }
}