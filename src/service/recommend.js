import request from './request';


//  轮播图
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}