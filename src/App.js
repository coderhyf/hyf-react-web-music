import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import routes from './router';
import store from "./store";
import YFAppHeader from '@/components/app-header';
import YFAppFooter from '@/components/app-footer';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YFAppHeader />
        {renderRoutes(routes)}
        <YFAppFooter />
      </HashRouter>
    </Provider>

  )
})
