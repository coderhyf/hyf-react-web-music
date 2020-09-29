import React from 'react';
import { Redirect } from "react-router-dom";

import YFDiscover from '@/pages/discover';
import YFRecommend from '../pages/discover/c-pages/recommend';
import YFAlbum from '../pages/discover/c-pages/album';
import YFArtist from '../pages/discover/c-pages/artist';
import YFAjradio from '../pages/discover/c-pages/djradio';
import YFSongs from '../pages/discover/c-pages/songs';
import YFRanking from '../pages/discover/c-pages/ranking';

import YFMine from '@/pages/mine';
import YFFriend from '@/pages/friend';

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: '/discover',
    component: YFDiscover,
    //  二级自路由
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: '/discover/recommend',
        component: YFRecommend
      },
      {
        path: '/discover/album',
        component: YFAlbum
      },
      {
        path: '/discover/artist',
        component: YFArtist
      },
      {
        path: '/discover/djradio',
        component: YFAjradio
      },
      {
        path: '/discover/songs',
        component: YFSongs
      },
      {
        path: '/discover/ranking',
        component: YFRanking
      }

    ]
  },
  {
    path: '/mine',
    component: YFMine
  },
  {
    path: '/friend',
    component: YFFriend
  }
]
export default routes;