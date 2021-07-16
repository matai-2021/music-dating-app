import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FAIL:
      return true
    case LOGIN_SUCCESS:
    case LOGOUT:
      return false
    default:
      return state
  }
}

export default reducer
