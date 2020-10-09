// 第三方库
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// 组件
import YFThemeHeaderNormal from '@/components/theme-header-normal';
import { getHotAlbumsAction } from '../../store/actionCreators';
import YFAlbumCover from '@/components/album-cover';
// css
import { HotAlbumWrapper } from './style';

export default memo(function YFHotAlbum() {
  const dispatch = useDispatch();
  const { hotAlbums } = useSelector(state => ({
    hotAlbums: state.getIn(['albumReducer', 'hotAlbums'])
  }));
  useEffect(() => {
    dispatch(getHotAlbumsAction())
  }, [dispatch]);
  return (
    <HotAlbumWrapper>
      <YFThemeHeaderNormal title='热门新碟' />
      <div className="album-list">
        {
          hotAlbums.slice(0, 10).map(item => {
            return (
              <YFAlbumCover
                info={item}
                key={item.id} />
            )
          })
        }
      </div>
    </HotAlbumWrapper>
  )
})
