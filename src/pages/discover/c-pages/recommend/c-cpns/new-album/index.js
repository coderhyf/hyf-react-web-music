import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getNewAlbumAction } from '../../store/actionCreators';
import { NEW_ALBUM_LIST } from '@/common/contants';
import YFThemeHeaderRCM from '@/components/theme-header-rcm';
import YFAlbumCover from '@/components/album-cover';
import { AlbumWrapper } from './style';
import { Carousel } from 'antd';
export default memo(function YFNewAlbum() {
  const pageRef = useRef();
  const { newAlbum } = useSelector(state => ({
    newAlbum: state.getIn(['recommend', 'newAlbum'])
  }), shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIST))
  }, [dispatch])
  return (
    <AlbumWrapper>
      <YFThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02"
          onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dost={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className='page'>
                    {
                      newAlbum.slice(item * 5, (item + 1) * 5).map(items => {
                        return <YFAlbumCover key={items.id}
                          info={items} size={100} width={118} bgp={'-570px'} />
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
          onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
