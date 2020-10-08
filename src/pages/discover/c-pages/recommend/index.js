import React, { memo } from 'react';
import YFTopBanner from './c-cpns/top-banner';
import YFNewAlbum from './c-cpns/new-album';
import YFRecommendRanking from './c-cpns/recommend-ranking';
import YFHotRecommed from './c-cpns/hot-recommend';
import YFHotAnchor from './c-cpns/hot-anchor';
import YFSettlrSinger from './c-cpns/settlr-singer';
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from './styel';
function YFRecommend() {
  return (
    <RecommendWraper>
      <YFTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <YFHotRecommed />
          <YFNewAlbum />
          <YFRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <YFSettlrSinger />
          <YFHotAnchor />

        </RecommendRight>
      </Content>
    </RecommendWraper>
  )
}

export default memo(YFRecommend);


// function YFRecommend(props) {
//   const { getTopBanners, topBanners } = props;
//   useEffect(() => {
//     getTopBanners();
//   }, [getTopBanners])
//   return (
//     <div>
//       YFRecommend: {topBanners.length}
//     </div>
//   )
// }
// const mapStateProps = state => ({
//   topBanners: state.recommend.topBanners
// });
// const mapDispatchProps = dispatch => ({
//   getTopBanners: () => {
//     dispatch(getTopBannersAction())
//   }
// });
// export default connect(mapStateProps, mapDispatchProps)(memo(YFRecommend)) 
