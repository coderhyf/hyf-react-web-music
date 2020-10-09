// 第三方库
import React, { memo, useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
// 组件
import YFSongsCategory from '../songs-category';
// css
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';
import { getSongCategoryAction } from '../../store/actionCreators';
export default memo(function YFSongsHeader() {
  const [showCategory, setShowCategory] = useState(false);
  const { currentCategory } = useSelector(state => ({
    currentCategory: state.getIn(['songsReducer', 'currentCategory'])
  }), shallowEqual)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongCategoryAction())
  }, [dispatch])
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" onClick={() => setShowCategory(!showCategory)}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCategory ? <YFSongsCategory /> : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  )
})
