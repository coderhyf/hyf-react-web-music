import * as actionTypes from './constants';

import { getTopBanners } from '@/service/recommend';

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