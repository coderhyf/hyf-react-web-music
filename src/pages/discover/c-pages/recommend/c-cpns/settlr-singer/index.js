import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import YFThemeHeaderSmall from '@/components/theme-header-small';
import { SetterSongerWrapper } from './style';
import { getSettleSingersAction } from '../../store/actionCreators';
import { getSizeImage } from "@/utils/format-utlis";
export default memo(function YFSttlrSinger() {
  const dispatch = useDispatch();
  const { settleSings } = useSelector(state => ({
    settleSings: state.getIn(["recommend", "settleSinger"])
  }), shallowEqual);
  useEffect(() => {
    dispatch(getSettleSingersAction())
  }, [dispatch])
  return (
    <SetterSongerWrapper>
      <YFThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {
          settleSings.map(item => {
            return (
              <a href="/#" key={item.id} className="item">
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join("") || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </a>
            )
          })
        }
      </div>
    </SetterSongerWrapper>
  )
})
