//  第三方库
import React, { memo } from 'react';
// 组件
import YFHotAlbum from './c-cpns/hot-album';
import YFTopAlbum from './c-cpns/top-album';
// css
import { AblumWrapper } from './style';
export default memo(function YFAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <YFHotAlbum />
      <YFTopAlbum />
    </AblumWrapper>
  )
})
