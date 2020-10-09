// 第三方库
import React, { memo, useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
// 网络请求
import {
  getSongsListAction,
  changeCurrentCategoryAction
} from '../../store/actionCreators';
// 组件
import HYThemeCover from '@/components/theme-cover';
import YFPagination from '@/components/pagination';
import { PER_PAGE_NUMBER } from '../../store/constants';
// css
import { SongListWrapper } from './style';

export default memo(function YFSongsList() {
  const [currentPage, setCurrentPage] = useState(1);
  // redux
  const { categorySongs } = useSelector(state => ({
    categorySongs: state.getIn(['songsReducer', 'categorySongs'])
  }), shallowEqual)
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;

  const dispatch = useDispatch();
  const cat = useLocation().cat;
  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat))
    dispatch(getSongsListAction(0))
  }, [dispatch, cat])

  function onPageChange(page) {
    setCurrentPage(page);
    dispatch(getSongsListAction(page));
  }

  return (
    <SongListWrapper>
      <div className="songs-list">
        {
          songList.map(item => {
            return (
              <HYThemeCover info={item} key={item.id} right="30px" />
            )
          })
        }
      </div>
      <YFPagination
        currentPage={currentPage}
        total={total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange} />
    </SongListWrapper>
  )
})
