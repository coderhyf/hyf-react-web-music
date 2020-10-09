// 第三方库
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// 组件
import YFThemeHeaderNormal from '@/components/theme-header-normal';
import YFAlbumCover from '@/components/album-cover';
import YFPagination from '@/components/pagination';
// css
import { TopAlbumWrapper } from './style';
import { getTopAlbumsAction } from '../../store/actionCreators';

export default memo(function YFTopAlbum() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { topAlbum, total } = useSelector(state => ({
    topAlbum: state.getIn(['albumReducer', 'topAlbums']),
    total: state.getIn(['albumReducer', 'topTotal']),
  }))
  useEffect(() => {
    dispatch(getTopAlbumsAction(1))
  }, [dispatch])
  const onPageChange = (page) => {
    setCurrentPage(page);
    dispatch(getTopAlbumsAction(page))
  }
  return (
    <TopAlbumWrapper>
      <YFThemeHeaderNormal title='全部新碟' />
      <div className="album-list">
        {
          topAlbum.map(item => {
            return (
              <YFAlbumCover
                info={item}
                key={item.id} />
            )
          })
        }
      </div>
      <YFPagination
        currentPage={currentPage}
        pageSize={10}
        total={total}
        onPageChange={onPageChange} />
    </TopAlbumWrapper>
  )
})
