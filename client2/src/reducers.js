import { combineReducers } from "redux";

import postIts from "./postIts/reducer";
import groups from "./groups/reducer";
import prefs from "./preferences/prefsReducer";

export default combineReducers({
  postIts,
  groups,
  prefs
});
