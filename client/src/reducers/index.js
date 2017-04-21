import { combineReducers } from 'redux'
import postIts from './postIts'
import user from './username'

const RetroApp = combineReducers({
  postIts,
  user
})

export default RetroApp
