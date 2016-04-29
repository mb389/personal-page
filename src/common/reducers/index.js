import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import layout from './layout';
import { reposByUser } from './about';
import travels from './travels';


const rootReducer = combineReducers({
  layout,
  repos : reposByUser,
  router : routerStateReducer,
  travels
});

export default rootReducer;
