import { SET_USER, LOGOUT } from '../actions'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user
    case LOGOUT:
      return {}
    default:
      return state
  }
}

export default reducer
