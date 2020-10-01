import React, { memo } from 'react'
import YFThemeHeaderRCM from '@/components/theme-header-rcm';
import { RankingWrapper } from './style';
export default memo(function YFRecommendRanking() {
  return (
    <RankingWrapper>
      <YFThemeHeaderRCM title="榜单" />
    </RankingWrapper>
  )
})
