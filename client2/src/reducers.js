import { combineReducers } from 'redux';

import postIts from './postIts/reducer';
import groups from './groups/reducer';

export default combineReducers({
  postIts,
  groups
})