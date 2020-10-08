import React, { memo } from 'react';
import { getSizeImage } from '@/utils/format-utlis';
import { TopRankingWrapper } from './style';

export default memo(function YFTopRanking(props) {
  const { info } = props;
  const { tracks = [] } = info;
  return (
    <TopRankingWrapper >
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="#/" className="image_cover">renking</a>
        </div>
        <div className="info">
          <a href="#/">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play"></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer"> 查看更多 &gt;</div>
    </TopRankingWrapper>
  )
})
