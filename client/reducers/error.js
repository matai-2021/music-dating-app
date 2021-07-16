import { LOGIN_FAIL, LOGIN_SUCCESS } from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FAIL:
      return true
    case LOGIN_SUCCESS:
      return false
    default:
      return false
  }
}

export default reducer
