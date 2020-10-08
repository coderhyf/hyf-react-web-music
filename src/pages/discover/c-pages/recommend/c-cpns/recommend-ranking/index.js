import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import YFThemeHeaderRCM from '@/components/theme-header-rcm';
import YFTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';
import { getTopListAction } from '../../store/actionCreators';
export default memo(function YFRecommendRanking() {
  const { upRanking, newRanking, orgRanking } = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    orgRanking: state.getIn(['recommend', 'orgRanking']),
  }), shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])
  return (
    <RankingWrapper>
      <YFThemeHeaderRCM title="榜单" />
      <div className="tops">
        <YFTopRanking info= {upRanking}/>
        <YFTopRanking info= {newRanking}/>
        <YFTopRanking info= {orgRanking}/>
      </div>
    </RankingWrapper>
  )
})
