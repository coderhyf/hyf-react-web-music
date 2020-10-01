import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RecommendWrapper } from './style';
import { getHotRecommnedsAction } from '../../store/actionCreators';
import { HOT_RECOMMEND_LIMIT } from '@/common/contants';
import YFThemeHeaderRCM from '@/components/theme-header-rcm';
import YFSongsCover from '@/components/songs-cover';
export default memo(function YFHotRecommed() {
  // state

  // redux hooks hotRecommneds 随便取的名字
  const { hotRecommneds } = useSelector(state => ({
    hotRecommneds: state.getIn(['recommend', 'hotRecommneds'])
  }), shallowEqual);

  const dispatch = useDispatch();
  // other hooks
  useEffect(() => {
    dispatch(getHotRecommnedsAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])
  const keywords = ['华语', '流行', '摇滚', '民谣', '电子']
  return (
    <RecommendWrapper>
      <YFThemeHeaderRCM title='热门推荐' keywords={keywords} />
      <div className="recommend-list">
        {
          hotRecommneds.map(item => {
            return <YFSongsCover key={item.id} info={item} />
          })
        }
      </div>
    </RecommendWrapper>
  )
})
