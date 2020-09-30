import React, { memo } from 'react';
import YFTopBanner from './c-cpns/top-banner';
function YFRecommend() {
  return (
    <div>
      <YFTopBanner />
    </div>
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
