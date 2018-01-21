import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from '../api/promiseMiddleware';

const middleware = applyMiddleware(thunk,promiseMiddleware);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, middleware );
}
