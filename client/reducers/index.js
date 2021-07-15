import { combineReducers } from 'redux'

import user from './user'
import genres from './genres'

export default combineReducers({
  user,
  genres
})
