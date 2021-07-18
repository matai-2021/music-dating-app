import { combineReducers } from 'redux'

import user from './user'
import genres from './genres'
import loginError from './error'
import swipee from './swipe'
import match from './match'

export default combineReducers({
  user,
  genres,
  loginError,
  swipee,
  match
})
