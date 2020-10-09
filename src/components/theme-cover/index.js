// 第三方库
import React, { memo } from 'react';
// 工具包
import {
  getSizeImage,
  getCount
} from '../../utils/format-utlis';
// css
import { ThemeCoverWrapper } from './style';

export default memo(function YFThemeCover(props) {
  const { info, right } = props;
  return (
    <ThemeCoverWrapper right={right}>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source">
        by {info.copywriter || info.creator.nickname}
      </div>
    </ThemeCoverWrapper>
  )
})
