// 第三方库
import React, { memo } from 'react';

import YFSongsHeader from './c-cpns/songs-header';
import YFSongsList from './c-cpns/songs-list';
// css
import { SongsWrapper } from './styel';

export default memo(function YFSongs() {
  return (
    <SongsWrapper className="wrap-v2">
      <YFSongsHeader />
      <YFSongsList />
    </SongsWrapper>
  )
})
