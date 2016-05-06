//This file merely configures the store for hot reloading.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
// import promiseMiddleware from 'redux-promise-middleware';

import promiseMiddleware from '../api/promiseMiddleware';


const middleware = applyMiddleware(thunk,promiseMiddleware,createLogger());

export default function configureStore(initialState) {
  let store = createStore(rootReducer, initialState,
    middleware
    // window.devToolsExtension ? window.devToolsExtension() : f => f

  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }


  return store;
}
