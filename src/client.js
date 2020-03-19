import React, { Fragment } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import store from './state/store';
import './styles/css/styles.css';

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>{renderRoutes(Routes)}</Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
