import { combineReducers } from 'redux'

import user from './user'
import genres from './genres'
import loginError from './error'

export default combineReducers({
  user,
  genres,
  loginError
})
