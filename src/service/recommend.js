import request from './request';


//  轮播图
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}


// 热门推荐
export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 新碟上架
export function getNewAlbum(limit) {
  return request({
    url: '/top/album',
    params: {
      limit,

    }
  })
}


// 榜单
export function getTopList(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}

// 入住歌手
export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}