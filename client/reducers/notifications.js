import { CLEAR_NOTIFICATION, CREATE_NOTIFICATION } from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_NOTIFICATION:
      return false
    case CREATE_NOTIFICATION:
      return true
    default:
      return state
  }
}

export default reducer
