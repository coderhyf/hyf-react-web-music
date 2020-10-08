import * as actionTypes from './constants';

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList,
  getArtistList,
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

export const getHotRecommnedsAction = limit => {
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
export const getNewAlbumAction = limit => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumsAction(res))
    })
  }
}

// 榜单
//新品
const changeUpRankingtAction = res => ({
  type: actionTypes.CHANGE_TOP_LIST,
  upRanking: res.playlist
});
const changeNewRankingtAction = res => ({
  type: actionTypes.CHANGE_NEW_LIST,
  newRanking: res.playlist
});
const changeOrgRankingtAction = res => ({
  type: actionTypes.CHANGE_ORG_LIST,
  orgRanking: res.playlist
});
export const getTopListAction = idx => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingtAction(res))
          break;
        case 2:
          dispatch(changeNewRankingtAction(res))
          break;
        case 3:
          dispatch(changeOrgRankingtAction(res))
          break;
        default:
      }
    })
  }
}

// 入住歌
const changeSettleSingersAction = res => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSinger: res.artists
});
export const getSettleSingersAction = () => {
  return dispath => {
    getArtistList(5, 5001).then(res => {
      dispath(changeSettleSingersAction(res))
    })
  }
}