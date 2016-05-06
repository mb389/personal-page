import { combineReducers } from 'redux';

import layout from './layout';
import { reposByUser } from './about';
import travels from './travels';


const rootReducer = combineReducers({
  layout,
  repos : reposByUser,
  travels
});

export default rootReducer;
