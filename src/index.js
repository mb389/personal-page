/*eslint-disable import/default*/

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { fetchComponentDataBeforeRender } from './api/fetchComponentDataBeforeRender';
require('./favicon.ico'); //Tell webpack to load favicon.ico

import './styles/index.css';
import './styles/map.scss';
import './styles/styles.scss';

const store = configureStore({});

function onUpdate() {
  if (window.__INITIAL_STATE__ !== null) {
  window.__INITIAL_STATE__ = null;
  return;
  }
  const { state: { components, params } } = this;
  fetchComponentDataBeforeRender(store.dispatch, components, params);
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
