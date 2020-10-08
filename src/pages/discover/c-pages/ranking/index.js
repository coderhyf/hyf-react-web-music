import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTopListAction } from './store/actionCreators';
import YFTopRanking from './c-cpns/top-ranking';
import YFRankingHeader from './c-cpns/ranking-header';
import YFRankingList from './c-cpns/ranking-list';
import {
  RankingWrapper,
  RankingLeft,
  RankingRight
} from './style';
export default memo(function YFRanking() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction())
  }, [dispatch])
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <YFTopRanking />
      </RankingLeft>
      <RankingRight>
        <YFRankingHeader />
        <YFRankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
