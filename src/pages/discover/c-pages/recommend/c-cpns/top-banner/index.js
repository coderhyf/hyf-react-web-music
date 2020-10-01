import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopBannersAction } from '../../store/actionCreators';
import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';
export default memo(function YFTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);

  // useSelector： 接受俩个参数，第一个是回调函数,第二个浅拷贝是否开启
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get('recommend').get('topBanners')
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)

  const dispatch = useDispatch();
  const bannerRef = useRef();
  //  发送网络请求 
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])
  const beforeChange = useCallback((fom, to) => {
    setCurrentIndex(to);
  }, [])
  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={beforeChange}>
            {
              topBanners.map(item => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
