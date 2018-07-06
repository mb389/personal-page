import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';

import configureStore from '../store/configureStore';
import routes from '../routes';


import 'font-awesome/css/font-awesome.css';
import "../../styles/index.css";


const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
          <Router history={history} >
          {routes}
        </Router>
  </Provider>,
  rootElement
);

// if (process.env.NODE_ENV !== 'production') {
//   require('../server/devtools')(store);
// }
